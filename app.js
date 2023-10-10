const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')

let leitor = new Reader()

async function main(){
    let dados = await leitor.Reade('./users.csv')
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)
   
    let html = await HtmlParser.Parse(usuarios)


}

main()