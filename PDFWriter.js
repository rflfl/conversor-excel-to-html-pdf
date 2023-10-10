const pdf = require('html-pdf')

class PDFWrite{
    static WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename, () => {})
    }
}

module.exports = PDFWrite