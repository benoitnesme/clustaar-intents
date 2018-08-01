import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { IntentTableComponent } from './intent/intent-table/intent-table.component';
import { ViewIntentComponent } from './intent/view-intent/view-intent.component';
import { IntentService } from './intent/intent/intent.service';
import { IntentServiceFake } from './intent/intent/intent.service.fake';
import { MaterialModule } from './/material.module';
@NgModule({
  declarations: [AppComponent, IntentTableComponent, ViewIntentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [{ provide: IntentService, useClass: IntentServiceFake }],
  bootstrap: [AppComponent],
})
export class AppModule {}
