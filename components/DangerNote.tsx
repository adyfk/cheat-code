const DangerNote: React.FC<{ cls?: string}> = ({children, cls = ''}) => {
  return (
    <div className={`bg-red-100 p-3 text-xs basis-full text-gray-600 ${cls}`}>
      {children}
    </div>
  );
};

export default DangerNote;

