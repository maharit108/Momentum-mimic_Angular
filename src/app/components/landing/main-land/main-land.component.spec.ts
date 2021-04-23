import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandComponent } from './main-land.component';

describe('MainLandComponent', () => {
  let component: MainLandComponent;
  let fixture: ComponentFixture<MainLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
