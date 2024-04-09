interface InitialState {
  [key: number]: number;
}

interface Denomination {
  value: number;
  type: string;
  quantity: number;
}

export class ATM {
  private _denominations: Map<string, number>;

  constructor(initialState: InitialState) {
    this._denominations = new Map<string, number>(
      Object.entries(initialState).sort((a, b) => Number(b[0]) - Number(a[0]))
    );
  }

  quantityLeft(denomination: string) {
    return this._denominations.get(denomination);
  }

  withdraw(amount: number) {
    let remaining = amount;
    let output = "";

    for (const [denomination, quantity] of this._denominations) {
      const noteValue = Number(denomination);
      const quotient = Math.min(Math.floor(remaining / noteValue), quantity);

      if (quotient > 0) {
        output += `${quotient} ${noteValue > 2 ? "bill" : "coin"}${
          quotient > 1 ? "s" : ""
        } of ${denomination}.\n`;
        remaining -= quotient * noteValue;
        this._denominations.set(denomination, quantity - quotient);
      }
    }
    if (remaining !== 0) {
      throw new Error("Unable to fulfill withdrawal request.");
    }
    return output;
  }
}
