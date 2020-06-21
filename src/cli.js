const optionator = require("optionator");

module.exports = optionator({
  prepend: "npmh [options]",
  options: [
    {
      option: "help",
      alias: "h",
      type: "Boolean",
      description: "Print help",
    },
    {
      option: "script",
      alias: "s",
      type: "Boolean",
      description: "Select runnable script, and run it!",
    },
    {
      option: "init",
      alias: "i",
      type: "Boolean",
      description: "IInitialize some non exists files needed in the project!",
    },
  ],
});
