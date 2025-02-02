import React from "react";
import { GrTrophy } from "react-icons/gr";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { LuHeadset } from "react-icons/lu";


const CenteredFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "High Quality",
      description: "Crafted from top materials",
      icon: <GrTrophy size={48} />,
    },
    {
      id: 2,
      title: "Warranty Protection",
      description: "Over 2 years",
      icon: <HiOutlineBadgeCheck size={60} />,
    },
    {
      id: 3,
      title: "24 / 7 Support",
      description: "Dedicated support",
      icon: <LuHeadset size={48} />,
    },
  ];
  

  return (
    <div className="w-full  py-16  ">
      {/* Outer Container with 20% white space on both sides */}
      <div className="mx-[20%] bg-gray-100 m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg  flex items-center space-x-6"
            >
              {/* Icon Column */}
              <div className="flex-shrink-0 text-4xl text-black ">
                {feature.icon}
              </div>

              {/* Text Column */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenteredFeatures;
