const Reader = require('./Reader')

let leitor = new Reader()

async function main(){
    let dados = await leitor.Reade('./users.csv')
}

main()