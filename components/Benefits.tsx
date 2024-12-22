import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  list: string[];
  brief: string;
}

const Card = ({ title, description, brief, imageSrc, reverse, list }: CardProps) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center p-8 mt-24`}>
      <Image src={imageSrc} alt={title} width={500} height={400} />
      <div className="md:ml-8 md:mr-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="inline-block bg-gray-200 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-300">{title}</h2>
        <p className="text-gray-800 text-2xl mt-4">
          <span className="font-bold font-2xl">{description} </span>
          {brief}
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-800">
          {list.map((item, index) => (
            <li key={index} className="flex items-center mt-2">
              <Image src='/Check.png' alt='checkicon' className="mr-2 " width={18} height={12} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-16 transform scale-105 mt-5">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-center flex items-center">
          Why Choose Our Platform ?
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 ">
        <Card
          title="Accurate Detection"
          description="Leverage AI for precise medical image analysis "
          brief="to identify tumors and abnormalities with confidence."
          list={[
            "Cutting-edge AI models for accuracy",
            "Early tumor detection for timely treatment",
            "Supports MRI and CT scan analysis"
          ]}
          imageSrc="/detect.png"
        />
        <Card
          title="Efficient Workflow"
          description="Streamline the diagnosis process "
          brief="with automated segmentation and analysis."
          list={[
            "Reduced manual efforts for radiologists",
            "Faster turnaround times for reports",
            "Easy-to-interpret segmentation visuals"
          ]}
          imageSrc="/efficient.png"
          reverse
        />
        <Card
          title="Collaborative Insights"
          description="Empower medical professionals "
          brief="with detailed insights and reports."
          list={[
            "Share results with healthcare teams seamlessly",
            "Enhance diagnosis accuracy through AI insights",
            "Tailored recommendations for treatment planning"
          ]}
          imageSrc="/collab.png"
        />
        <Card
          title="Support Tools"
          description="Access a suite of tools "
          brief="designed to assist in medical image processing."
          list={[
            "Advanced visualization tools for radiologists",
            "AI-powered predictive analytics",
            "Comprehensive reports for better patient care"
          ]}
          imageSrc="/tools.png"
          reverse
        />
      </div>
    </div>
  );
};

export default Benefits;
