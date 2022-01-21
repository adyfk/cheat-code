const Link: React.FC<{to: string}> = ({to, children}) => {
  return (
    <a className="hover:text-sky-900" href={to}>
      {children}
    </a>
  );
};

export default Link;
