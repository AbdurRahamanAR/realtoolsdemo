import React from "react";
import Icon from "./Icon";

type AdvertiseCardProps = {
  image: string;
};

const IconText = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <span>
      <Icon width={16} height={20.36} className="mr-2.5" icon={icon} />{" "}
      <span>{text}</span>
    </span>
  );
};

export default function AdvertiseCard({ image }: AdvertiseCardProps) {
  return (
    <div className="rounded bg-aliceBlue pt-[18.59px] pl-[22px] pr-[22.79px] pb-[24.71px]">
      <img
        className="w-full object-cover rounded max-h-[266.77px]"
        src={image}
        alt=""
      />
      <div>
        <IconText icon="location" text="Jersy City, NJ" />
      </div>
    </div>
  );
}
