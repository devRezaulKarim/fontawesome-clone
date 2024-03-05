export const sortFunction = (data, value) => {
  return value === "alphabetical"
    ? [...data].sort((a, b) =>
        a.icon.split(" ")[1].localeCompare(b.icon.split(" ")[1])
      )
    : value === "release"
    ? [...data].sort((a, b) =>
        b.icon.split(" ")[1].localeCompare(a.icon.split(" ")[1])
      )
    : [...data];
};
