import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIntentComponent } from './add-intent/add-intent.component';
import { IntentTableComponent } from './intent-table/intent-table.component';

const routes: Routes = [
  { path: '', component: IntentTableComponent },
  { path: 'add', component: AddIntentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentsManagerRootingModule {}
