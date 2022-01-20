const BlockNote: React.FC = ({children}) => {
  return (
    <div className='bg-orange-50 p-3 text-sm font-thin basis-full'>
      {children}
    </div>
  );
};

export default BlockNote;
