import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrenceEditionComponent } from './recurrence-edition.component';

describe('RecurrenceEditionComponent', () => {
  let component: RecurrenceEditionComponent;
  let fixture: ComponentFixture<RecurrenceEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrenceEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrenceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
