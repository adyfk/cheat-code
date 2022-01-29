import {findAfter} from 'unist-util-find-after';
import {visitParents as visit} from 'unist-util-visit-parents';

const MAX_HEADING_DEPTH = 6;

function transform(tree) {
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    visit(
        tree,
        (node) => node.type === 'heading' && node.depth === depth,
        sectionize,
    );
  }
}

function mappingHeaderAndChildren(between, depth) {
  if (depth === 2) {
    const mapChildren = (children) => {
      const section = children.filter(({type})=>type==='section');
      return {
        header: children.filter(({type})=>type!=='section'),
        section,
        length: section.length,
      };
    };

    const {header, section, length} = mapChildren(between);

    const cells = [[], [], []];
    for (let index = 0; index < length; index++) {
      cells[(index % 3)].push(section[index]);
    }
    const cellContent = {
      data: {
        hName: 'content',
        hProperties: {
          className: 'container-col',
        },
      },
    };

    return [
      ...header,
      {
        type: 'content',
        children: cells[0],
        ...cellContent,
      },
      {
        type: 'content',
        children: cells[1],
        ...cellContent,
      },
      {
        type: 'content',
        children: cells[2],
        ...cellContent,
      },
    ];
  } else {
    const [header, ...children] = between;
    return [
      header,
      {
        type: 'content',
        children,
        data: {
          hName: 'content',
          hProperties: {
            className: 'bg-white flex flex-col basis-full items-stretch border-2 rounded-lg items-start',
          },
        },
      },
    ];
  }
}

function sectionize(node, ancestors) {
  const start = node;
  const depth = start.depth;
  const parent = ancestors[ancestors.length - 1];
  const isEnd = (node) => node.type === 'heading' && node.depth <= depth || node.type === 'export';
  const end = findAfter(parent, start, isEnd);

  const startIndex = parent.children.indexOf(start);
  const endIndex = parent.children.indexOf(end);

  const between = parent.children.slice(
      startIndex,
    endIndex > 0 ? endIndex : undefined,
  );

  const element = {
    type: 'section',
    depth: depth,
    children: mappingHeaderAndChildren(between, depth),
    data: {
      hName: 'content',
      hProperties: {
        className: depth === 2 ?
        'container-h2' :
        'container-h3',
      },
    },
  };

  parent.children.splice(startIndex, between.length, element);
}

export default function plugins() {
  return transform;
}
