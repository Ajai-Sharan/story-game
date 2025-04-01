const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <p className="text-red-700">{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
