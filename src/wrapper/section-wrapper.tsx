import { JSX } from "react";
import { ChevronDown } from "lucide-react";

const SectionWrapper = (
  Component: () => JSX.Element,
  id: string,
  nextId?: string,
  className?: string
) => {
  const HOC = () => {
    return (
      <section
        id={id}
        className="relative flex flex-col justify-center items-center min-h-screen text-center"
      >
        <Component />
        {nextId && (
          <a href={`#${nextId}`} className="absolute bottom-10 animate-bounce">
            <ChevronDown size={64} />
          </a>
        )}
      </section>
    );
  };

  return HOC;
};

export default SectionWrapper;
