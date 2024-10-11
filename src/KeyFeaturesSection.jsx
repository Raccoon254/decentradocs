import React from 'react';
import FeatureCard from "./FeatureCard";
import uploadImage from './assets/upload.png';
import landingImage from './assets/landing.png';
import filesImage from './assets/files.png';
import featuresImage from './assets/features.png';

const KeyFeaturesSection = () => {
  const features = [
    {
      title: "Secure File Upload",
      description: "Easily upload your files with end-to-end encryption, ensuring your data remains private and secure.",
      iconPath: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5-5 5m5-5v12",
      image: uploadImage
    },
    {
      title: "Decentralized Storage",
      description: "Your files are stored across a network of nodes, ensuring high availability, reliability, and resistance to central points of failure.",
      iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
      image: landingImage
    },
    {
      title: "Easy File Management",
      description: "Intuitive interface for managing your stored files, with options for organization, categorization, and quick retrieval.",
      iconPath: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
      image: filesImage
    },
    {
      title: "Secure Sharing",
      description: "Share files securely with granular access controls, ensuring only authorized individuals have access to your sensitive information.",
      iconPath: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4-4 4m4-4v13",
      image: featuresImage
    }
  ];

  return (
    <section className="py-16 bg-gray-950" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-300 mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;