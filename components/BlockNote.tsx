const BlockNote: React.FC = ({children}) => {
  return (
    <div className='bg-orange-50 p-3 text-xs basis-full text-gray-600'>
      {children}
    </div>
  );
};

export default BlockNote;
