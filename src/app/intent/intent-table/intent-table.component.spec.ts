import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentTableComponent } from './intent-table.component';

describe('IntentTableComponent', () => {
  let component: IntentTableComponent;
  let fixture: ComponentFixture<IntentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentTableComponent ]
    })
    .compileComponents();
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
