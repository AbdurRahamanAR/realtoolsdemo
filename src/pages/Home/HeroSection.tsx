import Button from "../../components/Button";

export default function HeroSection() {
  return (
    <div
      className="
        min-h-[609px] pt-[174px] px-3 text-center w-full 
        bg-cover bg-[url('../assets/hero_bg.jpg')]
      "
    >
      <h1 className="text-headerBig text-white max-w-[676px] mx-auto">
        Self Storage Business Buy. Sell. Learn.
      </h1>
      <p className="mt-2.5 mx-auto text-xl leading-[33px] text-white font-medium max-w-[594px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
        aliquam non tortor blandit lobortis. blandit{" "}
      </p>
      <div className="flex flex-wrap pb-5 gap-5 justify-center mt-[52px]">
        <Button className="w-[251px]" variant="secondary">
          Sell Your Self Storage
        </Button>
        <Button variant="white" className="w-[251px]">
          Active Self Storage Listings
        </Button>
      </div>
    </div>
  );
}
