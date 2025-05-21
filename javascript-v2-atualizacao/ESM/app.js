import somar, { testarNome as testarNomeSoma } from "./module/soma.js"
import { media, teste, IP, testarNome as testarNomeMedia } from "./module/media.js"

console.log(somar(1, 2, 3, 4, 5))
console.log(media(1, 2, 3, 4, 5))

// fnInterna()

teste()
testarNomeMedia()
testarNomeSoma()
console.log("IP:", IP)