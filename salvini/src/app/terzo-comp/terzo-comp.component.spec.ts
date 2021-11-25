import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoCompComponent } from './terzo-comp.component';

describe('TerzoCompComponent', () => {
  let component: TerzoCompComponent;
  let fixture: ComponentFixture<TerzoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerzoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerzoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
