
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwlLight';

const Code: React.FC<any> = ({children, className}) => {
  const language = className.replace(/language-/, '');
  return (
    <div className='mt-2 basis-full bg-white scrollbar overflow-x-auto'>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={className} style={{...style, marginBottom: 10}}>
            {tokens.map((line, i) => tokens.length - 1 > i && (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
