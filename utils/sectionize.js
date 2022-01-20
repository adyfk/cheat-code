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
    children: [
      ...between,
      {
        type: 'span',
        children: [],
        data: {
          hName: 'span',
          hProperties: {
            className: 'block bg-slate-400 h-0.5 rounded-sm mt-3',
          },
        },
      },
    ],
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
