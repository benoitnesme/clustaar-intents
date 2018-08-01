import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentsManagerComponent } from './intentsmanager.component';

describe('IntentsManagerComponent', () => {
  let component: IntentsManagerComponent;
  let fixture: ComponentFixture<IntentsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntentsManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
