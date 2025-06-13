const TestimonialCard = ({ name, role, description, image }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-8 py-10 bg-white min-w-[300px] rounded-lg shadow-md border border-gray-100 hover:shadow-lg  transition-all duration-300">
      <div className="bg-primary rounded-full w-[100px] h-[100px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <h4 className="text-gray-500 text-sm">{role}</h4>
      </div>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default TestimonialCard;
