import React from 'react';

const FeatureCard = ({ title, description, iconPath, image }) => (
  <div className="bg-gray-900 ring-2 ring-gray-800 ring-offset-2 ring-offset-transparent rounded-lg p-6 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105" data-aos="fade-up">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 mr-3 text-blue-400">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={iconPath} />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-blue-200">{title}</h3>
    </div>
    <p className="text-lg text-gray-300 leading-relaxed mb-6">{description}</p>
    <div className="bg-gray-700 h-48 flex items-center justify-center rounded overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
  </div>
);

export default FeatureCard;