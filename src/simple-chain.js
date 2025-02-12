const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    if (!Array.isArray(this.value)) {
      this.value = [];
    }
    if (value === undefined) {
      this.value.push(`(  )`);
      return this;
    }
    this.value.push(`~~( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      !this.value[position - 1]
    ) {
      this.value = null;
      throw new Error("You can't remove incorrect link!");
    }
    this.value.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.value?.reverse();
    return this;
  },
  finishChain() {
    if (this.value[0].startsWith("~~")) {
      this.value[0] = this.value[0].replace("~~", "");
    }
    const result = this.value.join("");
    this.value = null;
    return result;
  },
};

module.exports = {
  chainMaker,
};
