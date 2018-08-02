import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intent } from '../intent/intent';
import { IntentService } from '../intent/intent.service';

@Component({
  selector: 'app-add-intent',
  templateUrl: './add-intent.component.html',
  styleUrls: ['./add-intent.component.css'],
})
export class AddIntentComponent implements OnInit {
  public currentIntent: Intent;
  constructor(private router: Router, private intentService: IntentService) {}

  ngOnInit() {
    this.currentIntent = new Intent();
  }

  public save() {
    this.intentService.save(this.currentIntent).subscribe(
      res => {
        this.router.navigate(['/intents/']);
      },
      err => {
        alert(err);
      }
    );
  }
}
