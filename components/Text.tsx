const TextNote: React.FC<{color?: string}> = ({children, color = 'primary'}) => {
  return (
    <span className={color === 'primary' ? `text-purple-500`: `text-green-500`}>
      {children}
    </span>
  );
};

export default TextNote;
