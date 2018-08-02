import { TestBed, async } from '@angular/core/testing';
import { IntentsManagerModule } from './intentsmanager.module';
import { IntentsManagerMaterialModule } from './intentsmanager.material.module';
import { IntentService } from './intent/intent.service';
import { IntentServiceFake } from './intent/intent.service.fake';
import { IntentsManagerComponent } from './intentsmanager.component';

describe('IntentsManagerModule', () => {
  let intentsManagerModule: IntentsManagerModule;
  beforeEach(async(() => {
    intentsManagerModule = new IntentsManagerModule();
    TestBed.configureTestingModule({
      declarations: [IntentsManagerComponent],
      imports: [IntentsManagerModule, IntentsManagerMaterialModule],
      providers: [{ provide: IntentService, useClass: IntentServiceFake }],
    }).compileComponents();
  }));

  it('should create IntentsManagerComponent', async(() => {
    const fixture = TestBed.createComponent(IntentsManagerComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  it('should create an instance', () => {
    expect(intentsManagerModule).toBeTruthy();
  });
});
