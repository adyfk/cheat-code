const BlockNote: React.FC<{ cls?: string }> = ({children, cls = ''}) => {
  return (
    <div className={`bg-orange-50 p-3 text-sm basis-full text-gray-600 ${cls}`}>
      {children}
    </div>
  );
};

export default BlockNote;
