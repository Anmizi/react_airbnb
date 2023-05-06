const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "00848a",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  minxin: {
    boxShadow: `
    transition: box-shadow 250ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }`,
  },
  border: {
    primaryColor: "#ddd",
  },
};
export default theme;
