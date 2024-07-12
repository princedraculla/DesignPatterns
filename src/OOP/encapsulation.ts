// Banck account
// deposit account
// withdraw account

class BanckAccount {
  private _balance: number;

  constructor(initialBalanceAccount: number) {
    this._balance = initialBalanceAccount;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0 || this._balance - amount < 0) {
      return;
    }

    this._balance -= amount;
  }

  public get getBalanceOfAccount(): number {
    return this._balance;
  }
}

export { BanckAccount };
