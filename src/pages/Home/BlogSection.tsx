import BlogCard from "../../components/BlogCard";

export default function BlogSection() {
  return (
    <div
      className="
      bg-primary px-5 py-10 rounded-tl-[100px] 
      md:rounded-tl-[200px] 
      lg:pt-[101px] lg:px-[108px] lg:pb-[108px]
      lg:rounded-tl-[300px]
    "
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-[826px] mx-auto">
          <h2 className="text-heading text-white">
            Learn Everything About Buying, Selling, and Operating a Self Storage
          </h2>
          <p className="text-body text-white mt-5">
            Learn about literally anything to know about Selling or Buying a
            Self Storage
          </p>
        </div>
        <div className="mt-[73px] flex gap-[31px]">
          {[1, 2, 3, 4].map((blog) => {
            return (
              <BlogCard
                key={blog}
                time="2days ago"
                tag="operate"
                image="https://images.unsplash.com/photo-1661435805196-81136edfa297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
