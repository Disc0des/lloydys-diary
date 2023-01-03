const capitaliseName = (string) => {
  const lowerString = string.toLowerCase();
  return lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
};

export default capitaliseName;
