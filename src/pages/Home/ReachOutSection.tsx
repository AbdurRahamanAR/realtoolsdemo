import React from "react";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

export default function ReachOutSection() {
  return (
    <div
      className="
        px-5 py-10
        bg-cover bg-glitter
        bg-[url('../assets/reach_bg.png')]
        md:pt-[80px] md:pb-[90px]
        lg:pt-[145px]
        lg:pb-[144px]
      "
    >
      <div
        className="
        p-5
        max-w-[1029px] mx-auto rounded bg-white 
        shadow-[0px_30px_40px_rgba(24,_73,_198,_0.1)] 
        md:flex md:px-10 md:py-[50px]
        lg:pt-[108px] lg:pr-[86px] lg:pb-[106px] lg:pl-[90px]
        justify-between items-center
        "
      >
        <div className="md:pr-5">
          <h1 className="text-heading font-bold text-sapphire">
            Any Queries? Reach Out to Us
          </h1>
          <p className="mt-5 opacity-70 text-lg font-normal">
            Feel free to write to us, we are happy to help you
          </p>
        </div>
        <Button className="w-[195px] mt-5 md:mt-0">
          Write to Us{" "}
          <Icon icon="send" className="ml-5 mt-1" width={16} height={18.62} />
        </Button>
      </div>
    </div>
  );
}
