import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { IntentTableComponent } from './intentsmanager/intent-table/intent-table.component';
import { ViewIntentComponent } from './intentsmanager/view-intent/view-intent.component';
import { IntentService } from './intentsmanager/intent/intent.service';
import { IntentServiceFake } from './intentsmanager/intent/intent.service.fake';
import { Intents } from './intentsmanager/intents.manager.material.module';
import { IntentsModule } from './intentsmanager/intentsmanager.module';
import { IntentsManagerComponent } from './intentsmanager/intents.managercomponent';

@NgModule({
  declarations: [
    AppComponent,
    IntentTableComponent,
    ViewIntentComponent,
    IntentsManagerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    IntentsManager.MaterialModule,
    IntentsManagerModule,
  ],
  providers: [{ provide: IntentService, useClass: IntentServiceFake }],
  bootstrap: [AppComponent],
})
export class AppModule {}
