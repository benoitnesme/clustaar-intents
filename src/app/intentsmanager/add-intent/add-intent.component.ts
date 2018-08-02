import { Component, ViewChild, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IIntent, SimpleIntent } from '../intent/intent';
import { IntentService } from '../intent/intent.service';

@Component({
  selector: 'app-add-intent',
  templateUrl: './add-intent.component.html',
  styleUrls: ['./add-intent.component.css'],
})
export class AddIntentComponent implements OnInit {
  @ViewChild('stepper') stepper;
  public intentError: string;
  intentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private intentService: IntentService
  ) {}

  ngOnInit() {
    this.intentForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          type: ['simple', Validators.required],
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          sayings: ['', Validators.required],
        }),
      ]),
    });
  }

  public saveThenReset() {
    this.save(true);
  }

  public saveThenBackToList() {
    this.save(false);
  }

  private save(saveThenReset: boolean) {
    const currentIntent = this.getIntentFromForm();
    this.intentService.save(currentIntent).subscribe(
      res => {
        if (saveThenReset) {
          this.stepper.reset();
          this.router.navigate(['/intents/add/']);
        } else {
          this.router.navigate(['/intents/']);
        }
      },
      err => {
        alert(err);
      }
    );
  }

  get formArray(): FormArray | null {
    return this.intentForm.get('formArray') as FormArray;
  }

  private getIntentFromForm(): IIntent {
    const forms = this.intentForm.get('formArray') as FormArray;
    const form0 = forms.at(0);
    const form1 = forms.at(1);
    const type = form0.get('type').value;
    if (type === 'simple') {
      const simpleIntent = new SimpleIntent();
      simpleIntent.name = form1.get('name').value;
      simpleIntent.sayings = form1.get('sayings').value;
      return simpleIntent;
    } else {
      console.log('unexpected intent type ' + type);
    }
  }
}
