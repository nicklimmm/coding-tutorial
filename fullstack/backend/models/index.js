const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const db = {};

// Create connection
const sequelize = new Sequelize("tutorial", "user", "user", {
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/tmp/mysql.sock",
  },
  logging: (msg) => {
    console.log(`=====> ${msg}`);
  },
});

fs.readdirSync(__dirname) // Read current directory
  .filter((filename) => filename.indexOf(".") !== 0 && filename !== "index.js") // Only model files
  .forEach((filename) => {
    // Import model, creates new table
    const model = require(path.join(__dirname, filename))(sequelize, DataTypes);
    // Save for future reference
    db[model.name] = model;
  });

// Create associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].options.hasOwnProperty("associate")) {
    db[modelName].options.associate("db");
  }
});

// Sync with database
// (async () => {
//   await sequelize.sync({ force: true });

//   // Create object
//   const userObj = db.User.build({ name: "Jane", age: 17 });
//   // Save/persist instance to database
//   await userObj.save();

//   // Build + save in a single method
//   await db.User.create({ name: "Bob", age: 10 });

//   // Update instance
//   userObj.set({
//     age: 99,
//   });
//   await userObj.save();

//   // Update a specific set of fields
//   await userObj.update({ age: 80 });

//   // Delete instance
//   await userObj.destroy();
// })();

module.exports = {
  sequelize,
  db,
};
