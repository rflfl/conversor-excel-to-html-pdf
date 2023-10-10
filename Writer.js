const fs = require("fs")
const util = require("util")

class Writer {
    constructor() {
        this.writer = util.promisify(fs.write)
    }

    async Write(filename, data) {
        try {
            await this.write(filename, data)
            return true
        } catch (err) {
            return false
        }
    }
}

module.exports = Writer