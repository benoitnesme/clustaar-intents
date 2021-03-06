import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import * as intent from './intent';
import { IIntent } from './intent';
import { IIntentService, IIntents } from './intent.service';
import { SimpleIntent } from './intent';
@Injectable({
  providedIn: 'root',
})
export class IntentServiceFake implements IIntentService {
  private intentList: IIntent[];
  constructor() {
    this.intentList = [];
    this.intentList.push(
      new SimpleIntent('horaires', [
        'A quelle heure ouvre',
        'A quelle heure ferme',
        'Quels sont les horaires',
        'Etes vous ouvert',
      ])
    );
    this.intentList.push(
      new SimpleIntent('se coucher', [
        'Les enfants doivent aller au lit à 22h30 au plus tard',
      ])
    );
    this.intentList.push(
      new SimpleIntent('intent 3', ['sayings 1', 'saying 2', 'saying 3'])
    );
    this.intentList.push(new SimpleIntent('intent 4', ['sayings 4.1']));
    this.intentList.push(new SimpleIntent('intent 5', ['sayings 5.1', 'sayings 5.2']));
  }

  getIntents(take: number, skip: number, searchText: string): Observable<IIntents> {
    return of({
      intents: this.intentList,
      total: this.intentList.length,
    } as IIntents);
  }

  save(i: IIntent): Observable<boolean> {
    if (i instanceof SimpleIntent) {
      const simpleIntent = i as SimpleIntent;
      const key = simpleIntent.sayings[0];
      let exists: boolean;
      exists = false;
      this.intentList.forEach(e => {
        const si = e as SimpleIntent;
        // == volontaire, ce n'est pas le même type
        if (si.sayings[0] == key) {
          exists = true;
        }
      });
      if (exists) {
        alert(key + ' already added');
      } else {
        this.intentList.push(new SimpleIntent(simpleIntent.answer, [simpleIntent.sayings]));
      }
    }

    return of(true);
  }
}
