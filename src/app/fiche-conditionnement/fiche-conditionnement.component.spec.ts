import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheConditionnementComponent } from './fiche-conditionnement.component';

describe('FicheConditionnementComponent', () => {
  let component: FicheConditionnementComponent;
  let fixture: ComponentFixture<FicheConditionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheConditionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheConditionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
