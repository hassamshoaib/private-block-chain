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
}

module.exports = Block;
