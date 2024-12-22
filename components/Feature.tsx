import React from 'react';
import Image from 'next/image';
const FeaturesSection=() => {
  const featuresLeftToRight = [
    { text: 'Accurate tumor segmentation', imageSrc: '/Check.png' },
    { text: 'AI-powered predictions', imageSrc: '/Check.png' },
    { text: 'Streamlined diagnosis process', imageSrc: '/Check.png' },
    { text: 'Supports medical professionals', imageSrc: '/Check.png' },
  ];

  const featuresRightToLeft = [
    { text: 'Remote expert consultations', imageSrc: '/Check.png' },
    { text: '24/7 AI chatbot assistance', imageSrc: '/Check.png' },
    { text: 'Insights for personalized treatment', imageSrc: '/Check.png' },
  ];

  return (
    <section className="relative overflow-hidden mt-4 p-4 mb-5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex flex-wrap justify-center gap-4 animate-slideLeftToRight">
        {featuresLeftToRight.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-200 rounded-full m-2"
          >
            <Image src={feature.imageSrc} alt="check" className="mr-2" width={18} height={12}/>
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 animate-slideRightToLeft">
        {featuresRightToLeft.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-200 rounded-full m-2"
          >
            <Image src={feature.imageSrc} alt="check" className="mr-2" width={18} height={12}  />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default FeaturesSection;
