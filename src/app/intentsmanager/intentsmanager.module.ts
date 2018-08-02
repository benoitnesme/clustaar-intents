import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { IntentService } from './intent/intent.service';
import { IntentServiceFake } from './intent/intent.service.fake';
import { IntentsManagerComponent } from './intentsmanager.component';
import { IntentTableComponent } from './intent-table/intent-table.component';
import { ViewIntentComponent } from './view-intent/view-intent.component';
import { AddIntentComponent } from './add-intent/add-intent.component';
import { IntentsManagerRootingModule } from './intentsmanager-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule, IntentsManagerRootingModule],
  exports: [IntentsManagerComponent, AddIntentComponent],
  declarations: [
    IntentsManagerComponent,
    IntentTableComponent,
    ViewIntentComponent,
    AddIntentComponent,
  ],
  providers: [{ provide: IntentService, useClass: IntentServiceFake }],
})
export class IntentsManagerModule {}
