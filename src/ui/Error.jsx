function Error({ children }) {
  return (
    <div
      className="p-4 m-4 text-2xl text-red-800 rounded-lg bg-red-50 "
      role="alert"
    >
      {children}
    </div>
  );
}

export default Error;
