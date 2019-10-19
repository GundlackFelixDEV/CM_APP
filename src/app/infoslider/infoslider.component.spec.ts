import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosliderComponent } from './infoslider.component';

describe('InfosliderComponent', () => {
  let component: InfosliderComponent;
  let fixture: ComponentFixture<InfosliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
