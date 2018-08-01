export interface IIntent {
  name: string;
  getDescription(): string;
}

export interface ISimpleIntent extends IIntent {
  sayings: string[];
}

export class Intent implements IIntent {
  constructor(public name = '') {}
  public getDescription(): string {
    return this.name;
  }
}

export class SimpleIntent implements ISimpleIntent {
  constructor(public name = '', public sayings = []) {}

  getDescription(): string {
    return this.sayings.join(', ');
  }
}
