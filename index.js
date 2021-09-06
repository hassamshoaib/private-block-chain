const Block = require("./classes/block");

const block = Block.mineBlock(Block.genesis(), ["hassam"]);

console.log(block.toString());
