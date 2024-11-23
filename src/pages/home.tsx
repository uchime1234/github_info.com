import Navbar from "../components/navbar";
import Loading from "../components/loadingdiv";
import Alert from "../components/alert";
import { useRef, useState } from "react";
import '../home.css'
import Card from "../components/cards";

import { Search } from 'lucide-react'
import {FileText} from 'lucide-react'


const sections = [
  "Software Developers",
  "Web Designers",
  "Mobile App Developers",
  "DevOps enginers",
  "Data Scientist",
  "Machine Learners",
  "Cybersecurity",
 "How to showcase ur own github projects "
]





function Home() {

const [showbackground, showingbackgorund] = useState(false)
const changing = () => {
    if (showingbackgorund) {
        showingbackgorund(true)
    } 
}
const removing = () => {
    showingbackgorund(false)
}



const [query, setQuery] = useState('')
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your search logic here
    console.log('Searching for:', filteredcards)
  }

const [Cards, setcards] = useState([
{id: 1,
image:"/image-one.jfif", 
name: "John Doe", 
age :'30', 
role:"Software Engineer", 
country: "USA", 
link:"https://example.com/john-doe" },

{ id: 2,
image: "/image-two.jfif", 
name: "Andy stones", 
age:  '26', 
role: "Software Engineer", 
country: "Romania", 
link: "https://example.com/john-doe" },

{  id: 3,
image: "image-three.jfif", 
name: "james Andrew", 
age: '35', 
role: "Software Engineer", 
country: "USA", 
link: "https://example.com/john-doe", },

{
                            id: 4,
                            image: "image-four.jfif", 
                            name: "lusion stones", 
                            age: '25', 
                            role: "Software Engineer", 
                            country: "England", 
                            link: "https://example.com/john-doe" 
},


                           
{

    id: 5,
    image:"image-seven.jfif", 
    name: "Sandra benson", 
    age: '26', 
    role:"Ui UX designer", 
    country: "London", 
    link: "https://example.com/john-doe", 
},

{
    id: 6,
    image: "image-eight.jfif", 
    name: "Ben wilson", 
    age:  '37', 
    role: "UI Ux designer", 
    country: "USA", 
    link: "https://example.com/john-doe", 
},

{ id: 7,
image: "/image-nine.jfif", 
name: "Lucas fenedeis", 
age:  '24', 
role: "UI UX designer", 
country: "France", 
link: "https://example.com/john-doe", 
},

{id: 8,
image: "image-ten.jfif", 
name: "emma verstain", 
age:  '24', 
role: "UI UX designers", 
country: "England", 
link: "https://example.com/john-doe", 
},

{ id: 9,
image:"image-13.jfif",
name: "keneith stone", 
age: '26', 
role: "Mobile app developer ", 
country: "UK", 
link: "https://example.com/john-doe", 
},

{
    id: 10,
    image: "image-14.jfif", 
    name: "Kelvin dunanam", 
    age: '26', 
    role: "Mobile app developer", 
    country: "USA", 
    link: "https://example.com/john-doe",
},

{
id: 11,
image: "image-15.jfif", 
name: "Mi xong", 
age: '30', 
role: "Mobile app developer", 
country: "China", 
link: "https://example.com/john-doe", 
},

{
    id: 12,
    image: "image-16.jfif", 
    name: "sarah nedson", 
    age: '30', 
    role: "Mobile app developer", 
    country: "USA", 
    link: "https://example.com/john-doe", 
},

{
    id: 13,
    image: "image-19.jfif", 
    name: "john .f stuwart", 
    age:  '30', 
    role: "Dev ops consultant", 
    country: "Uk", 
    link: "https://example.com/john-doe", 
},

{

    id: 14,
    image: "image-20.jfif", 
    name: "Austin Gyman", 
    age: '19', 
    role: "Dev ops enginer", 
    country: "USA", 
    link: "https://example.com/john-doe", 


},

{


    id: 15,
    image: "image-21.jfif", 
    name: "Terisa May", 
    age: '22', 
    role: "Dev ops enginer", 
    country: "USA", 
    link: "https://example.com/john-doe", 



},

{ id: 16,
image: "image-22.jfif", 
name: "Geroge stones", 
age: '33', 
role: "senior Dev ops ", 
country: "Cananda", 
link: "https://example.com/john-doe", 
},

{


    id: 17,
    image: "imag-25.jpg", 
    name:"Obodo Arinze", 
    age: '25', 
    role:"Data Scientist", 
    country: "Nigeria", 
    link: "https://example.com/john-doe",
},

{
    id: 18,
    image: "image-26.jfif", 
    name: "Jordan vondervolt", 
    age: '27', 
    role: "Data scientist", 
    country: "England", 
    link: "https://example.com/john-doe", 
},

{ id: 19,
image: "image-27.jfif", 
name: "kendel effel", 
age: '31', 
role: "Data scientist", 
country: "USA", 
link: "https://example.com/john-doe",
},

{
    id: 21,
    image: "image-28.jfif", 
    name: "Brintney renold", 
    age: '27', 
    role: "Data scientist", 
    country: "USA", 
    link: "https://example.com/john-doe", 
},

{
    id: 22,
    imag: "image-31.jfif", 
    name: "Kenith navas", 
    age: '32', 
    role: "Data scientist", 
    country: "Ethopia", 
    link: "https://example.com/john-doe", 
},

{
id: 23,
image: "image-33.jfif", 
name: "Arron swartnigar", 
age: '26', 
role: "Machine learner", 
country: "France", 
link: "https://example.com/john-doe", 
},               

{

id: 24,
image:"image-34.jfif", 
name: "Jefrey stwertson", 
age:  '40', 
role: "ml consultant", 
country: "USA", 
link: "https://example.com/john-doe", 
},

{
id: 25,
image: "image-37.jfif", 
name: "Landon kazon", 
age: '22', 
role: "Cyber analylist", 
country: "USA", 
link: "https://example.com/john-doe", 
},               

{
id: 26,
image: "image-38.jfif", 
name: "Jacob Noman", 
age:  '45', 
role: "Cybern Expert", 
country: "USA", 
link: "https://example.com/john-doe", 
},               

{
id: 27,
image: "image-39.jfif", 
name: "Robert fish", 
age: '34', 
role: "Cyber engineer", 
country: "Finland", 
link: "https://example.com/john-doe", 
},               

{
id: 28,
image: "image-40.jfif", 
name: "Willams Kegel", 
age: '26', 
role: "Cyber analyst", 
country: "USA", 
link: "https://example.com/john-doe", 
},


])
  

const filteredcards = Cards.filter((card) =>(
    card.name.toLowerCase().includes(query.toLowerCase())
))


    return ( 
    
<div>      
<div className=" h-44 top-0  w-screen fixed">

<div  className="custom-div absolute top-8 sm: -ml-5 ">
     <h1 data-text="My portfolio.com">My portfolio.com</h1>
     </div>

 <div className="nav-holder h-9 w-10 cursor-pointer absolute right-12 top-7 desktop:right-20 meds:top-8 legs:h-big legs:w-big meds:pt-1 legs:pt-2 pt-2 " onClick={changing}>
 <Search className="h-5 w-5 mx-auto " />
</div>

<div className="nav-holderr h-9 w-10 cursor-pointer absolute right-[110px] top-7 desktop:right-[140px]  meds:top-8 legs:h-big legs:w-big meds:pt-1 legs:pt-3 pt-2 " >
 <FileText className="h-5 w-5 mx-auto " />
</div>

{showbackground && <div>

<div className="absolute w-screen h-screen right-10 mx-auto showcase-div" onClick={removing}>
</div>

<div className="w- mx-auto z-50 relative top-48 desktop:right-14 right-7 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <form onSubmit={handleSearch} className="relative max-w-5xl mx-auto">

    <Search className="h-4 w-4 text-black relative top-7 left-2 sm:h-5 sm:w-5 md:h-6 md:w-6 sm:top-9 legs:top-11" />    
        
        <input
          type="text"
          placeholder="type the name of the person"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 px-8 sm:py-3 sm:px-10 md:py-4 md:px-12 rounded-full bg-primary border border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 ease-in-out text-black placeholder-black text-sm sm:text-base md:text-lg"
        />
    
     
      </form>
    </div>

    <div className=" h-56 w-screen relative mx-auto pl-2 right-6  top-64  zodiac-div  flex-row flex gap-4">
  {filteredcards.map((card) => (
<Card 
     id= {card.id}
      image= {card.image} 
      name= {card.name} 
      age = {card.age} 
      role= {card.role} 
      country= {card.country} 
      link= {card.link}                         
/> 

  ))}
    </div>
   
</div>
}

<div className=" flex flex-col relative top-36 gap-4  w-[90%] medss:w-[95%]  desktop:w-[98%] over-div">
<div className=" p-24 h-[300px] pr-10    ">
            <h2 className="text-center relative bottom-[120px] mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white ">{sections[0]}</h2>
            <div className=" flex-row  h-[200px]  pt-2 flex  absolute bottom-[210px] left-1 mx-auto real-div w-screen  gap-4">
            <Card 
                            
                            id={1}
                            image="/image-one.jfif" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        /> 

<Card 


                            id={2}
                            image="/image-two.jfif" 
                            name="Andy stones" 
                            age = '26' 
                            role="Software Engineer" 
                            country="Romania" 
                            link="https://example.com/john-doe" 
                        /> 
   
     <Card 

                             id={3}
                            image="image-three.jfif" 
                            name="james Andrew" 
                            age = '35' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />

          <Card 

                           id={4}
                            image="image-four.jfif" 
                            name="lusion stones" 
                            age = '25' 
                            role="Software Engineer" 
                            country="England" 
                            link="https://example.com/john-doe" 
                        />               

 
            </div>
        </div> 

        <div className=" p-24 h-[300px]   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[1]}</h2>
            <div className="flex flex-row  pt-2 absolute phones:top-[370px] top-[410px] left-0  h-[200px] mx-auto reall-div w-screen    gap-4">
                      
<Card 
                            id={5}
                            image="image-seven.jfif" 
                            name="Sandra benson" 
                            age = '26' 
                            role="Ui UX designer" 
                            country="London" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={6}
                            image="image-eight.jfif" 
                            name="Ben wilson" 
                            age = '37' 
                            role="UI Ux designer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={7}
                            image="/image-nine.jfif" 
                            name="Lucas fenedeis" 
                            age = '24' 
                            role="UI UX designer" 
                            country="France" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={8}
                            image="image-ten.jfif" 
                            name="emma verstain" 
                            age = '24' 
                            role="UI UX designers" 
                            country="England" 
                            link="https://example.com/john-doe" 
                        />               



            </div>
        </div> 

        <div className=" p-24 h-[300px]   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[2]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[720px] phones:top-[680px] left-0  h-[200px] mx-auto real-div w-screen  gap-4">
            <Card 
                            id={9}
                            image="image-13.jfif" 
                            name="keneith stone" 
                            age = '26' 
                            role="Mobile app developer " 
                            country="UK" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={10}
                            image="image-14.jfif" 
                            name="Kelvin dunanam" 
                            age = '26' 
                            role="Mobile app developer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={11}
                            image="image-15.jfif" 
                            name="Mi xong" 
                            age = '30' 
                            role="Mobile app developer" 
                            country="China" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={12}
                            image="image-16.jfif" 
                            name="sarah nedson" 
                            age = '30' 
                            role="Mobile app developer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div>

        <div className=" h-[300px] p-24 ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[3]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[1040px] phones:top-[990px] left-0  h-[200px] mx-auto real-div w-screen gap-4">
            <Card 
                            id={13}
                            image="image-19.jfif" 
                            name="john .f stuwart" 
                            age = '30' 
                            role="Dev ops consultant" 
                            country="Uk" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={14}
                            image="image-20.jfif" 
                            name="Austin Gyman" 
                            age = '19' 
                            role="Dev ops enginer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={15}
                            image="image-21.jfif" 
                            name="Terisa May" 
                            age = '22' 
                            role="Dev ops enginer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={16}
                            image="image-22.jfif" 
                            name="Geroge stones" 
                            age = '33' 
                            role="senior Dev ops " 
                            country="Cananda" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div>

        <div className=" h-[300px] p-24   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[4]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[1330px] phones:top-[1270px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            id={17}
                            image="imag-25.jpg" 
                            name="Obodo Arinze" 
                            age = '25' 
                            role="Data Scientist" 
                            country="Nigeria" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={18}
                            image="image-26.jfif" 
                            name="Jordan vondervolt" 
                            age = '27' 
                            role="Data scientist" 
                            country="England" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={19}
                            image="image-27.jfif" 
                            name="kendel effel" 
                            age = '31' 
                            role="Data scientist" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={20}
                            image="image-28.jfif" 
                            name="Brintney renold" 
                            age = '27' 
                            role="Data scientist" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div>

        <div className=" p-24   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[5]}</h2>
            <div className="flex flex-row   pt-2 absolute top-[1660px] phones:top-[1580px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            id={21}
                            image="image-31.jfif" 
                            name="Kenith navas" 
                            age = '32' 
                            role="Data scientist" 
                            country="Ethopia" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={22}
                            image="image-32.jfif" 
                            name="Chirstain kenson" 
                            age = '25' 
                            role="Machine learner" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                           id={23}
                            image="image-33.jfif" 
                            name="Arron swartnigar" 
                            age = '26' 
                            role="Machine learner" 
                            country="France" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={24}
                            image="image-34.jfif" 
                            name="Jefrey stwertson" 
                            age = '40' 
                            role="mal consultant" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div> 

        <div className=" p-24  h-[360px] ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[6]}</h2>
            <div className="flex flex-row   pt-2 absolute top-[1990px] phones:top-[1880px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            id={25}
                            image="image-37.jfif" 
                            name="Landon kazon" 
                            age = '22' 
                            role="Cyber analylist" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                           id={26}
                            image="image-38.jfif" 
                            name="Jacob Noman" 
                            age = '45' 
                            role="Cybern Expert" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            id={27}
                            image="image-39.jfif" 
                            name="Robert fish" 
                            age = '34' 
                            role="Cyber engineer" 
                            country="Finland" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            id={28}
                            image="image-40.jfif" 
                            name="Willams Kegel" 
                            age = '26' 
                            role="Cyber analyst" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div>

        <div className=" p-24  h-[360px]  ">
        <h2 className="text-center relative bottom-28 mt-4 text-2xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[7]}</h2>
        <p className=" text-primary relative bottom-20 text-2xl md:text-4xl font-bold mb-10  glow-black"> 1. Go over to the file icon button at the top to bring out form </p>
         <br />
       <p className=" text-primary relative bottom-20 text-2xl md:text-4xl font-bold mb-10  glow-black " > 2. fill in the form and it will retrive it from github, and showcase it to u </p> 
        </div>

        <div className=" p-24  h-[360px] ">

        <footer className="text-center text-sm relative bottom-7  text-white mt-20 px-4">
            <div className="mb-4">
              <a href="#" className="mx-2 hover:text-primary">
                FAQ
              </a>
              <a href="#" className="mx-2 hover:text-primary">
                Support
              </a>
              <a href="#" className="mx-2 hover:text-primary">
                Privacy Policy
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <i className=" fa-brands fa-github  text-2xl hover:text-primary cursor-pointer" />
              <i className=" fa-brands fa-linkedin  text-2xl hover:text-primary cursor-pointer" />
              <i className=" fa-brands fa-twitter text-2xl hover:text-primary cursor-pointer" />
              <i className=" fa-solid fa-envelope text-2xl hover:text-primary cursor-pointer" />
              <i className=" fa-brands fa-youtube text-2xl hover:text-primary cursor-pointer" />
            </div>
          </footer>

        </div>

       



  </div>

</div>
</div>




  
    
    )
}

export default Home