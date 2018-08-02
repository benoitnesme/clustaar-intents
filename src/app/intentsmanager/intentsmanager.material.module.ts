import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatButtonModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  declarations: [],
})
export class IntentsManagerMaterialModule {}
