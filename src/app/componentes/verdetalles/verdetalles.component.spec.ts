import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetallesComponent } from './verdetalles.component';

describe('VerdetallesComponent', () => {
  let component: VerdetallesComponent;
  let fixture: ComponentFixture<VerdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
