export default class Operacao {
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        console.log(this.operacao);
        return this.operacao.length;
    }
    get length() {
        return this.operacao.length;
    }
    obterResultado() {
        let result = "0";
        try {
            result = eval(this.operacao.join("")).toString();
        }
        catch (e) {
            result = "ERROR";
        }
        return result;
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12)
            resultado = resultado.substring(0, 12);
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
}
//# sourceMappingURL=Operacao.js.map