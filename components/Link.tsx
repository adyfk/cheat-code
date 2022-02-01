const Link: React.FC<{to: string}> = ({to, children}) => {
  return (
    <a className="hover:text-sky-900 underline" href={to} rel="nofollow">
      {children}
    </a>
  );
};

export default Link;
