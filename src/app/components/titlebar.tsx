import React from "react";

interface LeftAlignedHeadingProps {
  title: string; // The text for the heading
  className?: string; // Additional Tailwind classes for customization
  titleright?:string
}

const Titlebar: React.FC<LeftAlignedHeadingProps> = ({
  title,
  titleright,
  className = "",
}) => {
  return (
    <div className=" flex items-center justify-between w-full px-[17%] text-[#272343] mb-10 mt-7"> {/* 20% padding on left and right */}
    <div> 
      <h2 className={`text-2xl font-semibold text-left ${className}`}>
        {title}
      </h2>
    </div>

      <div>
        <h2 className={`text-sm font-bold underline underline-offset-8 ${className}`}>
        {titleright}
      </h2>
      </div>
    </div>
  );
};

export default Titlebar;
