module.exports = (title) => {
  switch (title) {
    case "new users":
      return "users";
    case "premium users":
      return "user-tie";
    case "active users":
      return "user-tag";
    case "total sales":
      return "dollar-sign";
    case "total orders":
      return "cart-plus";
  }
};
