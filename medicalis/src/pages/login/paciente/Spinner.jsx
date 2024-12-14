const Spinner = ({ size = "8", color = "blue" }) => {
  return (
    <div
      className={`w-${size} h-${size} border-4 border-${color}-500 border-t-transparent rounded-full animate-spin`}
    ></div>
  );
};

export default Spinner;
