import React from "react";

const NavigationDots = ({ id }: { id: string }) => {
  return (
    <div className="hidden md:flex fixed right-6 top-1/2 flex-col items-center space-y-4">
      {["", "about", "work-experience", "projects", "contacts"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="w-2 h-2 rounded-full bg-red-50 hover:bg-red-300 transition-all"
            style={id === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
