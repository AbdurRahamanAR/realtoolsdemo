import React from "react";
import Button from "./Button";
import Icon from "./Icon";

type BlogCardProps = {
  image: string;
  time: string;
  tag: string;
};

const BlogInfoText = ({
  value,
  icon,
}: {
  value: string | number;
  title?: string;
  icon: string;
}) => {
  return (
    <div className="flex text-sm leading-5">
      <Icon width={16} height={20.36} className="mr-[5px]" icon={icon} />
      <span className="opacity-70">{value}</span>
    </div>
  );
};

export default function BlogCard({ image, time, tag }: BlogCardProps) {
  return (
    <div className="rounded bg-white">
      <img
        className="w-full object-cover rounded-t h-[202px]"
        src={image}
        alt=""
      />
      <div className="pl-[11px] pr-[9px] pb-[20px]">
        <h2 className="text-[25px] font-semibold mt-[21px] text-xl text-sapphire">
          Heading of this Self Storage
        </h2>
        <div className="mt-5 w-full flex justify-between gap-x-[15px]">
          <BlogInfoText icon="clock" value={time} />
          <BlogInfoText icon="tag" value={tag} />
          <div className="flex text-sm leading-5">
            <img
              className="w-[20px] h-[20px] border border-dark rounded-full overflow-hidden mr-[5px]"
              src=""
            />
            <span className="opacity-70">Raza</span>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Button size="sm" className="w-[205px]">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
