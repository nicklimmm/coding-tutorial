module.exports = (sequelize, DataTypes) =>
  // Define table
  sequelize.define("User", {
    // Define columns
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
