import { Observable } from 'rxjs';
import { IIntent } from './intent';

export interface IIntents {
  intents: IIntent[];
  total: number;
}

export interface IIntentService {
  getIntents(take: number, skip: number, searchText: string): Observable<IIntents>;
}

export class IntentService implements IIntentService {
  getIntents(take: number, skip: number, searchText: string): Observable<IIntents> {
    // make API call here
    return null;
  }
}
