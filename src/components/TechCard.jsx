const TechCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-primary rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-primary">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default TechCard;
