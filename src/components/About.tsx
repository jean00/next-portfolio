import SectionWrapper from "@/wrapper/SectionWrapper";
import ReactIcon from "@/assets/reactIcon.svg";

const About = () => {
  console.log(ReactIcon);
  return (
    <>
      <h1 className="text-6xl font-bold mb-4">About me</h1>
      <h2 className="text-4xl mb-12">
        I build front-ends with performance and accessibility in mind.
      </h2>
      <div className="flex w-full justify-between">
        <p className="text-4xl text-left w-[50%]">
          Front-End Developer with 3+ years of experience building scalable web
          applications using React and TypeScript. Passionate about creating
          performant, accessible, and maintainable UIs within modern micro
          front-end architectures. Based in Milan, Italy
        </p>
        <div className="grid grid-cols-4 gap-4">
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
          <ReactIcon />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "projects");
