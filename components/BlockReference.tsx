const BlockReference: React.FC = ({children}) => {
  return (
    <div className='border-2 rounded-md mt-3 bg-white'>
      <div className='bg-blue-50 p-3 text-sm font-thin'>
        {children}
      </div>
    </div>
  );
};

export default BlockReference;
