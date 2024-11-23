import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Image, Calendar, Briefcase, Flag, Github } from 'lucide-react';

const Gitbase: React.FC = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    age: '',
    role: '',
    country: '',
    githubUsername: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
  };

  return (
    <div className={`min-h-screen text-gray-800 flex items-center justify-center ${showForm ? 'overflow-hidden' : ''}`}>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="border-4 border-primary rounded-lg shadow-xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border-b border-primary py-2">
                <User className="text-primary mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Image className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Calendar className="text-gray-400 mr-2" />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Briefcase className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Flag className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <Github className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="githubUsername"
                  placeholder="GitHub Username"
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="w-full max-w-6xl  mx-auto px-4 mt-16">
        <motion.div
          className="w-64 h-64 mx-auto mt-32 mb-16 rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src="/placeholder.svg?height=256&width=256"
            alt="Profile"
            className="w-full h-full object-cover border-4 border-primary "
          />
        </motion.div>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-72 bg-primary rounded-lg  p-4 flex items-center justify-center"
            >
              <p className="text-xl font-semibold text-black">Content {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gitbase;

