import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntentsManagerComponent } from './intentsmanager/intentsmanager.component';
import { AddIntentComponent } from './intentsmanager/add-intent/add-intent.component';
import { IntentTableComponent } from './intentsmanager/intent-table/intent-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/intents', pathMatch: 'full' },
  // FIXME : les routes sont hardcodées ici alors qu'elles devraient être
  // gérées par intentsmanager-routing.module
  { path: 'intents', component: IntentTableComponent },
  { path: 'intents/add', component: AddIntentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
