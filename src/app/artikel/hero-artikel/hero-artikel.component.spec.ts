import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroArtikelComponent } from './hero-artikel.component';

describe('HeroArtikelComponent', () => {
  let component: HeroArtikelComponent;
  let fixture: ComponentFixture<HeroArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
