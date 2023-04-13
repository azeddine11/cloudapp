import React from 'react';

const HomeSection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Welcome to Our Website</h2>
        <p className="text-lg mb-10">We offer the best products and services for all your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">Quality Products</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod congue ultricies. Nam vestibulum orci eu risus fringilla, nec dignissim nulla commodo. Pellentesque bibendum aliquam diam vitae finibus.</p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">Excellent Services</h3>
            <p className="text-lg">Praesent vehicula facilisis leo, eu egestas neque euismod eget. Sed ac ante in libero malesuada iaculis. Nulla facilisi. Proin nec purus et lectus tristique tristique vel et dui.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
