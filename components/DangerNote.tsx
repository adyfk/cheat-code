const DangerNote: React.FC = ({children}) => {
  return (
    <div className='bg-red-100 p-3 text-xs basis-full text-gray-600'>
      {children}
    </div>
  );
};

export default DangerNote;

