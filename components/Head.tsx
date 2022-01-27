import NextHead from 'next/head';

const Head: React.FC<{title?: string; desc?: string}> = ({title, desc='cheatsheet code that saves you from having to remember everything you learn'}) => {
  return (
    <NextHead>
      <title>CheatCode {!!title && `- ${title}`}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </NextHead>
  );
};

export default Head;
