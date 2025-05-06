import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/ad.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row md:gap-[5%] justify-between items-center">
        {/* Left Side */}
        <div className="md:w-[55%] text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Amandeep
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#ce3a3a] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'MEARN Developer',
                'Problem solver',
                'Curious Learner',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#ec4545]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          Full Stack Developer with a Bachelor's from NIT Kurukshetra, experienced in building and optimizing web applications using the MEARN stack. Proficient in UI design, API optimization, and well-versed in DSA, OOP, and DBMS. Strong problem-solving, leadership, and collaboration skills backed by project and client management experience.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-OBXzwUA0Mb6_Lj_LIdiKKjNSmV5ZhhY/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ec4545, #f87171)', 
              boxShadow: '0 0 2px #ec4545, 0 0 2px #ec4545, 0 0 40px #ec4545',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-[45%] flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#ec4545] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Amandeep"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(211,82,102,0.5)] shadow-[0_0_20px_#ec454550]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
