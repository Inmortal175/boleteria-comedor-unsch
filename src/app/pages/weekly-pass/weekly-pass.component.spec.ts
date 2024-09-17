import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPassComponent } from './weekly-pass.component';

describe('WeeklyPassComponent', () => {
  let component: WeeklyPassComponent;
  let fixture: ComponentFixture<WeeklyPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
