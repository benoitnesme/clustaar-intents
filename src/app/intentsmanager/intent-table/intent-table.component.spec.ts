import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentTableComponent } from './intent-table.component';
import { MaterialModule } from '../../material.module';
import { IntentService } from '../intentsmanager/intent.service';
import { IntentServiceFake } from '../intentsmanager/intent.service.fake';

describe('IntentTableComponent', () => {
  let component: IntentTableComponent;
  let fixture: ComponentFixture<IntentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntentTableComponent],
      imports: [MaterialModule],
      providers: [{ provide: IntentService, useClass: IntentServiceFake }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
