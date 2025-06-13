const StepCard = ({ step, title, description }) => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="bg-primary rounded-full w-fit px-4 py-2">
        <span className="text-base font-bold text-white">{step}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default StepCard;
