import React from "react";
import Button from "./Button";
import Icon from "./Icon";

type AdvertiseCardProps = {
  image: string;
  location: string;
  unitCount: number;
  occupancy: number;
  size: string;
};

const PropertyInfoText = ({
  title,
  value,
  icon,
}: {
  value: string | number;
  title?: string;
  icon: string;
}) => {
  return (
    <div className="min-w-6/12 flex leading-5">
      <Icon width={16} height={20.36} className="mr-2.5" icon={icon} />{" "}
      <span className="font-medium">{title}&nbsp;</span>
      <span>{value}</span>
    </div>
  );
};

export default function AdvertiseCard({
  image,
  location,
  unitCount,
  occupancy,
  size,
}: AdvertiseCardProps) {
  return (
    <div className="rounded bg-aliceBlue pt-[18.59px] pl-[22px] pr-[22.79px] pb-[24.71px]">
      <img
        className="w-full object-cover rounded max-h-[266.77px]"
        src={image}
        alt=""
      />
      <h2 className="text-[25px] font-semibold mt-[30px]">
        Heading of this Self Storage
      </h2>
      <div className="mt-[30px] w-full flex flex-wrap justify-between gap-y-5">
        <PropertyInfoText icon="location" value={location} />
        <PropertyInfoText
          icon="property"
          title="Total Units:"
          value={unitCount}
        />
        <PropertyInfoText
          icon="humans"
          title="Occupancy:"
          value={occupancy + "%"}
        />
        <PropertyInfoText icon="size" title="Size:" value={size} />
      </div>
      <div className="mt-[36.97px] flex justify-center">
        <Button className="w-[277px]">View More Detail</Button>
      </div>
    </div>
  );
}
