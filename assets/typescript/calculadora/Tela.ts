export default class Tela {

  constructor(private elemento: HTMLDivElement | null = document.querySelector("#values")) {

    this.conteudo = "0"

  }


  set conteudo(valor: string) {

    if (valor.length > 12)
      valor = "ERROR"


    if (this.elemento) {
      this.elemento.innerHTML = valor
    }


  }

  get conteudo(): string {
    return this.elemento ? this.elemento.innerHTML : "0"
  }


}