import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const Card = ({ title, description, image, buttonText }: CardProps) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image className="w-full h-48 object-cover" src={image} alt={title} width={500} height={192} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
