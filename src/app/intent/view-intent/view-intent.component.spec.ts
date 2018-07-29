import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIntentComponent } from './view-intent.component';

describe('ViewIntentComponent', () => {
  let component: ViewIntentComponent;
  let fixture: ComponentFixture<ViewIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
