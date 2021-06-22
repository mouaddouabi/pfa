import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFichMatEmbComponent } from './update-fich-mat-emb.component';

describe('UpdateFichMatEmbComponent', () => {
  let component: UpdateFichMatEmbComponent;
  let fixture: ComponentFixture<UpdateFichMatEmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFichMatEmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFichMatEmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
