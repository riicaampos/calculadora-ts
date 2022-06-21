import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
import Operacao from "./Operacao.js";

export default class CalculadoraControle {

     constructor(
          private tela = new Tela(),
          private operacao = new Operacao({
               onCalculado: (resultado: string) => {
                    this.tela.conteudo = resultado
               }}
          )
     ) {

          new DataHora()

          this.eventosBotoes()

     }

     eventosBotoes(): void {
          document.querySelectorAll("#teclado button")
               .forEach(el => {
                    el.addEventListener("click", (evento: Event) => {

                         const target = evento.target as HTMLButtonElement

                         switch (target.id) {
                              case "zero":
                              case "um":
                              case "dois":
                              case "tres":
                              case "quatro":
                              case "cinco":
                              case "seis":
                              case "sete":
                              case "oito":
                              case "nove":
                                   this.adicionarNumero(Number(target.dataset.valor))

                                   break

                              case "adicao":
                              case "subtracao":
                              case "divisao":
                              case "multiplicacao":
                                   this.adicionarOperador(target.dataset.valor as string)

                                   break

                              case "ponto":

                                   break

                              case "limpar":

                                   break

                              case "desfazer":

                                   break

                              case "porcentagem":

                                   break

                              case "igual":
                                   this.calcular()

                                   break

                         }

                    })
               })
     }

     adicionarOperacao(valor: string): void {
          this.operacao.adicionar(valor)
     }

     adicionarNumero(num: number): void {
          this.tela.conteudo = num.toString()
          this.adicionarOperacao(num.toString())
     }

     adicionarOperador(op: string): void {
          this.adicionarOperacao(op)
     }

     calcular(): void {
          this.operacao.calcular()
     }



}