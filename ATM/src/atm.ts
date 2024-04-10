interface InitialState {
  [key: number]: number;
}

interface Denomination {
  value: number;
  quantity: number;
}

export class ATM {
  private _denominations: Denomination[];

  constructor(initialState: InitialState) {
    this._denominations = Object.entries(initialState)
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .map(([value, quantity]) => ({ value: Number(value), quantity }));
  }

  withdraw(amount: number) {
    let remaining = amount;
    let output = "";

    for (const denomination of this._denominations) {
      const quotient = Math.min(
        Math.floor(remaining / denomination.value),
        denomination.quantity
      );

      if (quotient > 0) {
        output += `${quotient} ${denomination.value > 2 ? "bill" : "coin"}${
          quotient > 1 ? "s" : ""
        } of ${denomination.value}.\n`;
        remaining -= quotient * denomination.value;
        denomination.quantity -= quotient;
      }
    }
    if (remaining !== 0) {
      throw new Error("Unable to fulfill withdrawal request.");
    }
    return output;
  }
}
