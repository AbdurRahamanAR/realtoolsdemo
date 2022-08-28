import Button from "../../components/Button";

export default function SellStorageCard() {
  return (
    <div
      className="
        bg-glitter px-5 pt-10 pb-12
        bg-no-repeat bg-left-bottom
        bg-[url('../assets/sell_section_bg_shape.svg')]
        rounded-br-[100px]
        sm:pt-[100px] sm:px-[30px] sm:pb-[100px]
        md:pt-[150px] md:pl-[50px] md:pb-[100px] 
        md:rounded-br-[200px] bg-[position:left_bottom,_right_bottom]
        md:bg-[length:auto,_400px]
        md:bg-[url('../assets/sell_section_bg_shape.svg'),_url('../assets/man_with_container.png')]
        lg:pt-[266px] lg:pl-[99px] lg:pb-[240px] 
        lg:rounded-br-[300px]
        lg:bg-[length:auto,_679px]
      "
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-[638px]">
          <h3 className="text-heading font-bold text-sapphire mb-5">
            Do you have a Self Storage for Sale?
          </h3>
          <p className="text-body text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </p>
          <Button className="mt-10 w-[253px]" size="xl">
            Sell Your Self Storage
          </Button>
        </div>
      </div>
    </div>
  );
}
