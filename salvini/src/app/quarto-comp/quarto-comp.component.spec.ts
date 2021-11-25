import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoCompComponent } from './quarto-comp.component';

describe('QuartoCompComponent', () => {
  let component: QuartoCompComponent;
  let fixture: ComponentFixture<QuartoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
