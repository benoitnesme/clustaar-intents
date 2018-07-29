import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import * as intent from './intent';
import { IIntentService, IIntents } from './intent.service';
import { SimpleIntent } from './intent';
@Injectable({
  providedIn: 'root',
})
export class IntentServiceFake implements IIntentService {
  constructor() {}

  getIntents(take: number, skip: number, searchText: string): Observable<IIntents> {
    const iii = [];
    iii.push(new intent.SimpleIntent('', ['', '']));
    return of({
      intents: [
        new intent.SimpleIntent('horaires', [
          'A quelle heure ouvre',
          'A quelle heure ferme',
          'Quels sont les horaires',
          'Etes vous ouvert',
        ]),
        new intent.SimpleIntent('se coucher', [
          'Les enfants doivent aller au lit à 22h30 au plus tard',
        ]),
        new intent.SimpleIntent('intent 3', ['sayings 1', 'saying 2', 'saying 3']),
        new intent.SimpleIntent('intent 4', ['sayings 4.1']),
        new intent.SimpleIntent('intent 5', ['sayings 5.1', 'sayings 5.2']),
      ],
      total: 5,
    } as IIntents);

    // return of({
    //   intents: [
    //     {
    //       name: 'horaires',
    //       sayings: [
    //         'A quelle heure ouvre',
    //         'A quelle heure ferme',
    //         'Quels sont les horaires',
    //         'Etes vous ouvert',
    //       ],
    //     } as intent.SimpleIntent,
    //     {
    //       name: 'se coucher',
    //       sayings: ['Les enfants doivent aller au lit à 22h30 au plus tard'],
    //     } as intent.SimpleIntent,
    //     {
    //       name: 'intent 3',
    //       sayings: ['sayings 1', 'saying 2', 'saying 3'],
    //     } as intent.SimpleIntent,
    //     {
    //       name: 'intent 4',
    //       sayings: ['sayings 4.1'],
    //     } as intent.SimpleIntent,
    //     {
    //       name: 'intent 5',
    //       sayings: ['sayings 5.1', 'sayings 5.2'],
    //     } as intent.SimpleIntent,
    //   ],
    //   total: 5,
    // } as IIntents);
  }
}
