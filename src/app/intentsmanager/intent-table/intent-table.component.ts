import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { IntentService, IIntents } from '../intent/intent.service';
// import { MatTableDataSource } from '@angular/material';
import { IntentsManagerRootingModule } from '../intentsmanager-routing.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddIntentComponent } from '../add-intent/add-intent.component';
@Component({
  selector: 'app-intent-table',
  templateUrl: './intent-table.component.html',
  styleUrls: ['./intent-table.component.css'],
})
export class IntentTableComponent implements OnInit {
  public list: IIntents;
  // dataSource = new MatTableDataSource();
  constructor(private intentService: IntentService, public dialog: MatDialog) {}

  ngOnInit() {
    const stream = this.intentService.getIntents(0, 100, null);
    stream.subscribe(data => (this.list = data));
  }

  addIntentDialog(): void {
    const dialogRef = this.dialog.open(AddIntentComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
