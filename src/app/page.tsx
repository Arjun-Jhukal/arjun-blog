import SingleNewsBlock from "./components/News";

export default function Home() {
  return (
    <section className="blog__list my-[80px] md:my-[120px]">
      <div className="container">
        {Array.from({
          length: 4,
        }).map((item, index) => {
          return <SingleNewsBlock key={index.toString()} />;
        })}
      </div>
    </section>
  );
}
