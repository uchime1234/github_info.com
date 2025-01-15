import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Image, Calendar, Briefcase, Flag, Github } from 'lucide-react';
import axios from 'axios';

const Gitbase: React.FC = () => {

interface gitinfo {
  username: string;
  bio: string;
  public_repos: string;
  avatar_url: string;
  html_url: string;
  location: string,
  followers: string,
  following: string,
  created_at: string,
  updated_at: string,
  twitter_username: string,

}

const [names, setnames] = useState('');
const [Cards, setCards] = useState<Card[]>([]);
const [username, setusername] = useState("")
const [message, setmessage] = useState("")
const [image, setimage] = useState<File | null>(null)
const [age, setage] = useState("")
const [role, setrole] = useState("")
const [country, setcountry] = useState("")
const [showForm, setShowForm] = useState(true);
const [gitinfo, setgitinfo] = useState<gitinfo | null> (null);


interface Card {
  id: number
  name: string
  age: string
  role: string
  country: string
  link: string
  
}


    
const fetching = async (e: React.FormEvent) => {
  
  e.preventDefault();
  setShowForm(false);

 const payload = {
  names: names,
  username: username,
  role: role,
  age: age,
  country: country,
  

 }

  try {
    setmessage('')
    const response = await axios.post('http://127.0.0.1:8000/github-user/ ', payload, { 

    headers: { 'Content-Type': 'application/json', },    
    });
    setgitinfo(response.data);
    
  
  
  } catch(err: any){
    console.log(err)
    if(err.response && err.response.data.error) {
     setmessage(err.response.data.error)
    } else {
       setmessage('an unexpected error occured')
    }
  
  
  
  }} 
  

  return (
    <div className={`min-h-screen text-gray-800 flex items-center justify-center ${showForm ? 'overflow-hidden' : ''}`}>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-10">
          <div className="border-4 border-primary rounded-lg shadow-xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <form onSubmit={fetching} className="space-y-4">

              <div className="flex items-center border-b border-primary py-2">
                <User className="text-primary mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  value={names}
                  onChange={(e) => setnames( e.target.value)}
                  
                
                />
              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Image className="text-primary mr-2" />
                <input
                  type="file"
                  name="image"
                  placeholder="Image URL"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={(e) =>{
                    if (e.target.files && e.target.files[0]) { setimage( e.target.files[0])}
                    }}
                  accept='image/*'
                
                />
              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Calendar className="text-primary mr-2" />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  value={age}
                  onChange={(e) => setage( e.target.value)}
                
                />
              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Briefcase className="text-primary mr-2" />
                <select name="role"  onChange={(e) => setrole( e.target.value)}  required>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Data Science">Data Science</option>
                <option value="DevOps">DevOps</option>
                <option value="Cloud Engineering">Cloud Engineering</option>
                <option value="web designers">web designers</option>
      </select>

              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Flag className="text-primary mr-2" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  value={country}
                  onChange={(e) => setcountry( e.target.value)}
                
                />
              </div>
              <div className="flex items-center border-b border-primary py-2">
                <Github className="text-primary mr-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="GitHub Username"
                  required
                  className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                  value={username}
                  onChange={(e) => setusername( e.target.value)}
                
                />
              </div>
              <button                
                type="submit"
                className="w-full bg-primary hover:bg-prime text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {message && <div className='rexr-red-400'>{message}</div>}
      <div className="w-full max-w-6xl  mx-auto px-4 mt-16">
        <motion.div
          className="w-64 h-64 mx-auto mt-32 mb-16 rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src={image ? URL.createObjectURL(image) : ""}
            alt="Preview"
            className="w-full h-full object-cover border-4 border-primary "
          />
        </motion.div>
        <div className="space-y-36">
          {gitinfo && (
         <div className="space-y-36" >
   <div className="h-96 bg-primary rounded-lg  p-4 flex items-center justify-center"><p className="text-xl font-semibold text-black">
   username: {gitinfo.username}
    <br />
   user bio:{gitinfo.bio}
   <br />
   users public_url:{gitinfo.public_repos}
   <br />
   user avartar_url: {gitinfo.avatar_url}
   <br />
   user location: {gitinfo.location}
   <br />
   users followers: {gitinfo.followers}
   <br />
   user created_at: {gitinfo.created_at}
   <br />
   user updated_at: {gitinfo.updated_at}
   <br />
   user twitter_username: {gitinfo.twitter_username}
   <br />
   </p></div>       
    </div>

          )}
       
      
            </div>
        
        </div>
      </div>
    
  );
};

export default Gitbase;
