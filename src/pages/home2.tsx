import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/download.jfif"
import "../pages/home2.css";
import { useNavigate } from "react-router-dom";



const sections = [
  { id: "hero", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "benefits", label: "Benefits" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Get Started" },
];

export default function HomePage() {


  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  
  const take = () => {
    setTimeout(() => {navigate("/gitbase")}, 2000)
}
 

const move = () => {
  setTimeout(() => {navigate("/techfield")}, 2000)
}


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section && scrollContainerRef.current) {
      const containerTop = scrollContainerRef.current.offsetTop;
      const sectionTop = section.offsetTop;
      scrollContainerRef.current.scrollTo({
        top: sectionTop - containerTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black vulture-div  min-h-screen overflow-hidden  flex">


<div  className="custom-div absolute  sm: -ml-5 ">
     <h1 data-text="My portfolio.com">My portfolio.com</h1>
     </div>

 <div className="nav-holder h-9 w-10 absolute right-3 top-7 meds:top-8 legs:h-big legs:w-big meds:pt-1 legs:pt-2 pt-1 ">
<i className="fa-solid fa-user "></i>
</div>

      <nav className="fixed top-56 left-0 h-increase w-1/5 hidden lg:flex flex-col justify-center shund-div bg-opacity-50 backdrop-blur-md">
        <ul className="w-full">
          {sections.map((section) => (
            <li key={section.id} className="mb-4 w-full">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left p-4 ${
                  activeSection === section.id
                    ? "bg-primary text-black"
                    : "text-white"
                } hover:bg-primary hover:text-black transition-colors duration-300`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full lg:w-4/5 lg:ml-[20%] pt-[100px]">
        <div
          ref={scrollContainerRef}
          className="h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden scrollbar-hide"
        >
          <section
            id="hero"
            ref={(el) => (sectionRefs.current["hero"] = el)}
            className="mb-20 px-4"
          >
            <div className="max-w-4xl mx-auto">
             
              <div className="mt-10 text-center">
                <div onClick={take}
                    className="w-eighty h-32 rounded-round mx-auto  bg-primary shadow-lg shadow-primary/50 text-4xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-800/50 glow-green md:text-5xl pt-9 lg:text-6xl  font-bold mb-4 text-black"
                >Form input</div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-6">
                <span className="text-white glow-white">
                  Effortlessly showcase
                </span>{" "}
                <span className="text-primary glow-green">
                  your GitHub portfolio
                </span>
              </h1>
              <p className="text-white text-center mt-6">
                This website allows you to get your GitHub portfolio info and
                display your projects simply by entering your GitHub username.
                It can also store and retrieve data, allowing you to directly
                access the data without having to retrieve it all over again.
              </p>
            </div>
          </section>

          <section
            id="how-it-works"
            ref={(el) => (sectionRefs.current["how-it-works"] = el)}
            className="mb-20 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white glow-white text-center">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
              {[
                "Read about how it works",
                "Go to tech field, click the plus button",
                "Put in your username and submit",
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-lg p-6 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <div className="text-5xl font-bold text-black mb-4">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button onClick={move} className="bg-primary text-black font-bold py-3 px-6 rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 glow-green">
                Tech Field
              </button>
            </div>
          </section>

          <section
            id="benefits"
            ref={(el) => (sectionRefs.current["benefits"] = el)}
            className="mb-20 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 glow-white text-white text-center">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Automatic Updates",
                  description:
                    "Portfolio content is updated with your GitHub activity",
                },
                {
                  title: "Clear Design",
                  description:
                    "A beautiful minimalistic layout that showcases your work",
                },
                {
                  title: "Easy Sharing",
                  description: "Sharable link to your personalized portfolio",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <h3 className="text-xl font-bold mb-4 text-black">
                    {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="testimonials"
            ref={(el) => (sectionRefs.current["testimonials"] = el)}
            className="mb-20 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white glow-white text-center">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "John Doe",
                  role: "Software Engineer",
                  text: "This tool has revolutionized how I showcase my projects!",
                },
                {
                  name: "Jane Smith",
                  role: "Web Developer",
                  text: "I love how easy it is to keep my portfolio up to date.",
                },
                {
                  name: "Alex Johnson",
                  role: "UX Designer",
                  text: "The clean design really makes my work stand out. Highly recommended!",
                },
                {
                  name: "Emily Brown",
                  role: "Data Scientist",
                  text: "Great for showcasing my data projects alongside my code repositories.",
                },
                {
                  name: "Michael Lee",
                  role: "Full Stack Developer",
                  text: "This platform has helped me land multiple job interviews. It's a game-changer!",
                },
                {
                  name: "Sarah Wilson",
                  role: "Open Source Contributor",
                  text: "Perfect for highlighting my contributions to various projects. Love it!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                >
                  <p className="mb-4">"{testimonial.text}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="cta"
            ref={(el) => (sectionRefs.current["cta"] = el)}
            className="mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-white text-center">
              Ready to showcase your GitHub work?
            </h2>
            <button onClick={move} className="bg-primary text-black font-bold py-3 px-6 rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 glow-green">
              Tech Field
            </button>
          </section>

          <footer className="text-center text-sm text-white mt-20 px-4">
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
  );
}
