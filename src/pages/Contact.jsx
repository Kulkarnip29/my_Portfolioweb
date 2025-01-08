import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-500">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-4">Reach out to me via email or phone!</p>
        <div className="space-y-4">
          <p className="text-xl text-gray-100">
            📧 <a href="mailto:prasadkulkarni32596@gmail.com" className="underline hover:text-yellow-500">prasadkulkarni32596@gmail.com</a>
          </p>
          <p className="text-xl text-gray-100">
            📞 <a href="tel:+919607482906" className="underline hover:text-yellow-500">+91 9607482906</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
