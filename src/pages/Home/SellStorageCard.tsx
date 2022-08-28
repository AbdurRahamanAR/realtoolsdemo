import React from "react";
import Button from "../../components/Button";

export default function SellStorageCard() {
  return (
    <div className="bg-glitter">
      <div>
        <h3 className="text-heading font-bold text-sapphire mb-5">
          Do you have a Self Storage for Sale?
        </h3>
        <p className="text-body text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
          proin scelerisque nunc.
        </p>
        <Button className="mt-10">Sell Your Self Storage</Button>
      </div>
    </div>
  );
}
