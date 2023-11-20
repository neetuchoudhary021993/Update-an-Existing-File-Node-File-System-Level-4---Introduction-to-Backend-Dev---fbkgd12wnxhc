const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
   await fs.appendFile(fileName, `, ${fileContent}`);
   console.log(`File ${fileName} updated successfully.`);
};

module.exports = updateFile;
