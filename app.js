const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')

let leitor = new Reader()

async function main(){
    let dados = await leitor.Reade('./users.csv')
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)
    console.log(usuarios.RowCount)
    console.log(usuarios.ColumnCount)

}

main()