

interface DeveloperInfo {
    id: number
    name: string
    age: string
    role: string
    country: string
    link: string
    image?: string
  }
  





  const Card = ({ id, image, name, age, role, country, link }:DeveloperInfo) => {
    
    return (
        <div className="bg-primary flex-shrink-0  w-[340px] rounded-md flex h-[180px] items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50" id={`card-${id}`}>
            <img src={image} alt={name} className="w-20 h-20 rounded-lg mr-4 relative left-3" />
            <div className="relative left-10 ">
                <h2 className="text-lg font-bold">{name}</h2>
                <p>Age: {age}</p>
                <p>Role: {role}</p>
                <p>Country: {country}</p>
                <a href={link} className="text-white hover:underline">Learn More</a>
            </div>
        </div>
    );
};

export default Card;