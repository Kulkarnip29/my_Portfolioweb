import React from 'react';

const projects = [
  {
    name: 'Nike Clone',
    description: 'An e-commerce app using MERN stack with features like product listing, shopping cart, and secure payment gateway.',
    link: 'https://675c3d3c8e8b42269d538365--nikecloneprasadk.netlify.app/',
    image: 'https://example.com/hero-image.jpg', // Replace with actual hero image URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-500">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-red-700 to-yellow-600 text-white shadow-lg p-6 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Hero Image */}
              <div className="relative mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg"></div>
              </div>
              {/* Project Name */}
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              {/* Short Overview */}
              <p className="text-gray-300 mb-4">{project.description}</p>
              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
