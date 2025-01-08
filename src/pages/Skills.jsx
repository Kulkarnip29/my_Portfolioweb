import React from 'react';

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', '.NET', 'RESTful APIs'] },
  { category: 'Database', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'AWS (Basics)'] },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-16 pb-16 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">{skill.category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
