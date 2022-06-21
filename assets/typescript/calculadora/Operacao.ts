import IOperacaoOpcoes from "./IOperacaoOpcoes.js"


export default class Operacao {

    private onCalculado: any

    constructor(
        opts: IOperacaoOpcoes,
        private operacao: string[] = [],
    ) {

        this.onCalculado = opts.onCalculado
    }


    adicionar(valor: string): number {

        if(this.operacao.length === 3){
           this.calcular()
        }
        
        this.operacao.push(valor)
        console.log(this.operacao)

        return this.operacao.length

    }

    get length(): number {
        return this.operacao.length
    }

    obterResultado(): string {

        let result: string = "0"

        try {
            result = eval(this.operacao.join("")).toString()
        } catch (e) {
            result = "ERROR"
        }

        return result

    }

    calcular(): void {
        let resultado = this.obterResultado()

         if(resultado.length > 12)
         resultado = resultado.substring(0,12)

        this.operacao = [resultado]
        this.onCalculado(resultado)
    }

}