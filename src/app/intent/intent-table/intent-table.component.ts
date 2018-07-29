import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { IntentService, IIntents } from '../intent/intent.service';

@Component({
  selector: 'app-intent-table',
  templateUrl: './intent-table.component.html',
  styleUrls: ['./intent-table.component.css'],
})
export class IntentTableComponent implements OnInit {
  public list: IIntents;
  constructor(private intentService: IntentService) {}

  ngOnInit() {
    const stream = this.intentService.getIntents(0, 100, null);
    stream.subscribe(data => (this.list = data));
  }
}
