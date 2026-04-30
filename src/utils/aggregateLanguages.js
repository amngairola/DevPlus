export const aggregateLanguages = (repos) => {
  const map = {};

  repos.forEach((repo) => {
    const lang = repo.language || "Other";

    map[lang] = (map[lang] || 0) + 1;
  });

  // convert to array
  let result = Object.entries(map).map(([name, count]) => ({
    name,
    value: count,
  }));

  result.sort((a, b) => b.value - a.value);

  const top = result.slice(0, 5);

  const rest = result.slice(5);

  if (rest.length > 0) {
    const otherCount = rest.reduce((sum, item) => sum + item.value, 0);

    top.push({ name: "Other", value: otherCount });
  }

  return top;
};
