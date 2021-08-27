const AuthWrapper = ({ children }) => {
  return (
    <>
      <h1>Private Layout</h1>
      {children}
    </>
  );
};

export default AuthWrapper;
