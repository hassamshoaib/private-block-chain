const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(timeStamp, hash, lastHash, data) {
    this.lastHash = lastHash;
    this.hash = hash;
    this.timeStamp = timeStamp;
    this.data = data;
  }

  /**
   * Show block payload
   */
  toString() {
    return `Block -
        Timestamp: ${this.timeStamp}
        Last Hash: ${this.lastHash.substring(0, 12)}
        Hash: ${this.hash}
        Data: ${this.data}
    `;
  }

  static genesis() {
    return new this("timestamp", "----", "----", []);
  }

  static mineBlock(lastBlock, data) {
    const timeStamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timeStamp, lastHash, data);

    return new this(timeStamp, hash, lastHash, data);
  }

  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }
}

module.exports = Block;
