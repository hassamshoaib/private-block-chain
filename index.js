const BlockChain = require("./classes/block-chain");

blockChain = new BlockChain();

blockChain.addBlock(["Hassam"]);
blockChain.addBlock(["Shoaib"]);

blockChain.printChain();
