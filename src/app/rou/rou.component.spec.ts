import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouComponent } from './rou.component';

describe('RouComponent', () => {
  let component: RouComponent;
  let fixture: ComponentFixture<RouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
