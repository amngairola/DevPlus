export const languageColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Cpp: "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export const getColor = (lang) => {
  return (
    languageColors[lang] ||
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
};
