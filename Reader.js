const fs = require("fs")

class Reader{

    Reade(filepath){
        fs.readFile(filepath, "utf-8", (err, data) => {
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    }
}

module.exports = Reader