const DescNote: React.FC<{
  disablePadding?: boolean;
  cls?: string
}> = ({children, disablePadding, cls = ''}) => {
  return (
    <div className={`bg-slate-50 ${disablePadding ? '' : 'p-3'} text-sm basis-full text-gray-600 ${cls}`}>
      {children}
    </div>
  );
};

export default DescNote;
