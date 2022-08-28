import React from "react";
import Button from "../../components/Button";

export default function BuyStorageCard() {
  return (
    <div
      className="
        px-5 pt-10 pb-[80px]
        md:mb-[-84px] md:pb-[271px] md:pt-[277px]
        md:bg-[length:auto,_400px]
        md:bg-[url('../assets/lady.png')]
        md:bg-[length:300px]
        md:bg-[position:left_20px_bottom]
        md:bg-no-repeat 
        lg:bg-[length:400px]
        lg:bg-[position:left_83px_bottom]
        xl:bg-[length:672px]
      "
    >
      <div
        className="
          max-w-screen-xl w-full mx-auto
          flex justify-end
        "
      >
        <div className="max-w-[638px]">
          <h3 className="text-heading font-bold text-sapphire mb-5">
            Do you want to buy a Self Storage?
          </h3>
          <p className="text-body text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </p>
          <Button className="mt-10 w-[225px]" size="xl">
            Buy a Self Storage
          </Button>
        </div>
      </div>
    </div>
  );
}
