const fs = require("fs/promises");

const readJsonFile = async (path, flags) => {
  // Read the contents of users.json and convert it to JS Object
  const file = await fs.open(path, flags);
  const buffer = await file.readFile();
  const data = JSON.parse(buffer.toString().trim());
  await file.close();

  return data;
};

module.exports = { readJsonFile };
