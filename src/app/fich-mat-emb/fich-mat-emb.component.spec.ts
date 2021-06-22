import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichMatEmbComponent } from './fich-mat-emb.component';

describe('FichMatEmbComponent', () => {
  let component: FichMatEmbComponent;
  let fixture: ComponentFixture<FichMatEmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichMatEmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichMatEmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
