import React from "react";
import Image from "next/image";

// Example images (replace these with your actual logo files)
import Zapier from "../../../public/images/Zapier.png";
import pipedrive from "../../../public/images/Pipedrive.png";
import Pd from "../../../public/images/Pd.png";
import Banck from "../../../public/images/Banck.png";
import Burnt from "../../../public/images/Burnt.png";
import Moz from "../../../public/images/Moz.png";
import Seven from "../../../public/images/Seven.png";

const LogoSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
          {/* Logo items */}
          <div className="flex justify-center">
            <Image src={Zapier} alt="Zapier Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={pipedrive} alt="Pipedrive Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={Banck} alt="CIB Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={Seven} alt="Zoom Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={Burnt} alt="Burnt Toast Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={Pd} alt="PandaDoc Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center">
            <Image src={Moz} alt="Moz Logo" width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
