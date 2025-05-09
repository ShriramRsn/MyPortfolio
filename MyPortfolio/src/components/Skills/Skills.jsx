import React from "react";
import { useTheme } from "../../common/themeContext.jsx";
import "../Skills/styles.css";

const ProgressSection = () => {
  const { theme } = useTheme();

  const data = [
    { title: "HTML", description: "Semantic HTML structuring" },
    { title: "CSS", description: "Strong CSS skills" },
    { title: "Tailwind", description: "Efficient Styling with Tailwind CSS" },
    { title: "JavaScript", description: "Intermediate JavaScript" },
    { title: "React", description: "Intermediate in React.js" },
    { title: "Java", description: "Problem Solving & Competitive Coding" },
    { title: "Python", description: "Machine Learning Enthusiast" },
    { title: "Docker", description: "Containerization and environment management" },
  ];

  const sectionTextColor = theme === "light" ? "#333333" : "#E5E7EB";
  const backgroundColor = theme === "light" ? "#FFFFFF" : "#1A202C";

  return (
    <div className="flex flex-col items-center text-center p-10" style={{ backgroundColor }}>
      <h2 className="text-3xl font-bold" style={{ color: sectionTextColor }}>
        Skills
      </h2>
      <p className="text-lg text-gray-500 max-w-xl mt-4" style={{ color: sectionTextColor }}>
        Proficient in HTML, Tailwind CSS, JavaScript, React JS, Java, Python (Machine Learning), and C++.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg" style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#2D3748" }}>
            <h3 className="text-xl font-semibold mt-4" style={{ color: sectionTextColor }}>
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm" style={{ color: sectionTextColor }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
