import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { IntentTableComponent } from './intent/intent-table/intent-table.component';
import { IntentService } from './intent/intent/intent.service';
import { IntentServiceFake } from './intent/intent/intent.service.fake';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, IntentTableComponent],
      imports: [MaterialModule],
      providers: [{ provide: IntentService, useClass: IntentServiceFake }],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Simple Intents application'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Simple Intents application');
  }));
});
