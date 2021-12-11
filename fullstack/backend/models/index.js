const { Sequelize, DataTypes } = require("sequelize");

// Create connection
const sequelize = new Sequelize("tutorial", "user", "user", {
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/tmp/mysql.sock",
  },
  logging: (val) => {
    console.log("\nSequelize Logger:");
    console.log("~~~~~~~~~~~~~~~~~~");
    console.log(val);
    console.log("~~~~~~~~~~~~~~~~~~\n");
  },
});

// Create model
const User = sequelize.define("User", {
  // Define columns
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
});

// Sync with database
(async () => {
  await sequelize.sync({ force: true });

  // Create object
  const userObj = User.build({ name: "Jane", age: 17 });
  // Save/persist instance to database
  await userObj.save();

  // Build + save in a single method
  await User.create({ name: "Bob", age: 10 });

  // Update instance
  userObj.set({
    age: 99,
  });
  await userObj.save();

  // Update a specific set of fields
  await userObj.update({ age: 80 });

  // Delete instance
  await userObj.destroy();
})();

module.exports = {
  sequelize,
  User,
};
