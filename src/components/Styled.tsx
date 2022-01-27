type wrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: wrapperProps) => {
  return (
    <div className="flex justify-between flex-col w-full border border-blue-300 border-solid rounded-lg h-full">
      {children}
    </div>
  );
};

const Spinner = () => (
  <div className="flex justify-center items-center mt-20">
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export { Wrapper, Spinner };
