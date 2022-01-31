const DescNote: React.FC<{ disablePadding?: boolean }> = ({children, disablePadding}) => {
  return (
    <div className={`bg-slate-50 ${disablePadding ? '' : 'p-3'} text-xs basis-full text-gray-600`}>
      {children}
    </div>
  );
};

export default DescNote;
