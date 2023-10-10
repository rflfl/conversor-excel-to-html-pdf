class Processor {
    static Process(data){
        let parts = data.split("\n")
        let rows = []
        parts.forEach(row => {
           let arr = row.split(",")
           rows.push(arr)
        });
        return rows
    }
}

module.exports = Processor