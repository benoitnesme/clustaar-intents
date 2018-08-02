export interface IIntent {
  answer: string;
  getDescription(): string;
}

export interface ISimpleIntent extends IIntent {
  sayings: string[];
}

export class Intent implements IIntent {
  constructor(public answer = '') {}
  public getDescription(): string {
    return this.answer;
  }
}

export class SimpleIntent implements ISimpleIntent {
  constructor(public answer = '', public sayings = []) {}

  getDescription(): string {
    return this.sayings.join(', ');
  }
}
