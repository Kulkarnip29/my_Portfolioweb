import React from 'react';

const About = () => {
  return (
    <section id="about" className="pt-16 pb-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-500">About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I am Prasad Kulkarni, a highly motivated Full Stack Web Developer with expertise in both front-end and back-end technologies.
        </p>
        <p className="text-lg text-gray-400">
          I hold an MCA degree and certifications in Web Full Stack and .NET Full Stack Development. Passionate about creating innovative, user-centric web applications.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-8 py-3 mt-6 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold text-lg rounded-lg hover:bg-gradient-to-l transform transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
