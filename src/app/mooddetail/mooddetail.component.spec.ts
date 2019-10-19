import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooddetailComponent } from './mooddetail.component';

describe('MooddetailComponent', () => {
  let component: MooddetailComponent;
  let fixture: ComponentFixture<MooddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
