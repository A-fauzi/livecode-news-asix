import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusunanOrganisasiComponent } from './susunan-organisasi.component';

describe('SusunanOrganisasiComponent', () => {
  let component: SusunanOrganisasiComponent;
  let fixture: ComponentFixture<SusunanOrganisasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusunanOrganisasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SusunanOrganisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
