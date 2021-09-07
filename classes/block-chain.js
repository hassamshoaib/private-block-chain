const Block = require("./block");
class BlockChain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = Block.mineBlock(lastBlock, data);
    this.chain.push(newBlock);
    return newBlock;
  }

  printChain() {
    this.chain.map(block => {
      console.log(`${block.toString()}\n`);
    });
  }
}

module.exports = BlockChain;
