const Reader = require('./Reader')
const Processor = require('./Processor')

let leitor = new Reader()

async function main(){
    let dados = await leitor.Reade('./users.csv')
    let dadosProcessados = Processor.Process(dados)
}

main()