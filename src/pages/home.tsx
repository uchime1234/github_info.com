import Navbar from "../components/navbar";
import Loading from "../components/loadingdiv";
import Alert from "../components/alert";
import { useRef, useState } from "react";
import myImage from "../assets/download.jfif"
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
    console.log('Searching for:', query)
  }


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

    <div className=" h-56 w-80 relative mx-auto right-6  top-64  zodiac-div">

    </div>
   
</div>
}

<div className=" flex flex-col relative top-36 gap-4  w-[90%] medss:w-[95%]  desktop:w-[98%] over-div">
<div className=" p-24 h-[300px] pr-10    ">
            <h2 className="text-center relative bottom-[120px] mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white ">{sections[0]}</h2>
            <div className=" flex-row  h-[200px]  pt-2 flex  absolute bottom-[210px] left-1 mx-auto real-div w-screen  gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        /> 

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        /> 
   
     <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />

          <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />        

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />        


 
            </div>
        </div> 

        <div className=" p-24 h-[300px]   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[1]}</h2>
            <div className="flex flex-row  pt-2 absolute phones:top-[370px] top-[410px] left-0  h-[200px] mx-auto reall-div w-screen    gap-4">
                      
<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               



            </div>
        </div> 

        <div className=" p-24 h-[300px]   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[2]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[720px] phones:top-[680px] left-0  h-[200px] mx-auto real-div w-screen  gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

            </div>
        </div>

        <div className=" h-[300px] p-24 ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[3]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[1040px] phones:top-[990px] left-0  h-[200px] mx-auto real-div w-screen gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               
 
            </div>
        </div>

        <div className=" h-[300px] p-24   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[4]}</h2>
            <div className="flex flex-row    pt-2 absolute top-[1330px] phones:top-[1270px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />
            </div>
        </div>

        <div className=" p-24   ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[5]}</h2>
            <div className="flex flex-row   pt-2 absolute top-[1660px] phones:top-[1580px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />
            </div>
        </div> 

        <div className=" p-24  h-[360px] ">
            <h2 className="text-center relative bottom-28 mt-4 text-3xl md:text-4xl font-bold mb-10 text-white glow-white">{sections[6]}</h2>
            <div className="flex flex-row   pt-2 absolute top-[1990px] phones:top-[1880px] left-0  h-[200px] mx-auto real-div w-screen   gap-4">
            <Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               


<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
                            country="USA" 
                            link="https://example.com/john-doe" 
                        />               

<Card 
                            image="https://example.com/image1.jpg" 
                            name="John Doe" 
                            age = '30' 
                            role="Software Engineer" 
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