import { Negociacao} from "./models/negociacao.js"


let negociacao = new Negociacao(new Date(),10, 100);

console.log(negociacao.data);