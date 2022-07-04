export class Negociacao {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get quantidade(): number {
    const quantidade = this._quantidade;
    return quantidade;
  }

  get valor(): number {
    const valor = this._valor;
    return valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }

  public criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
}
