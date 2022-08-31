import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemegangLisensiComponent } from './pemegang-lisensi.component';

describe('PemegangLisensiComponent', () => {
  let component: PemegangLisensiComponent;
  let fixture: ComponentFixture<PemegangLisensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemegangLisensiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemegangLisensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
