import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestasiComponent } from './investasi.component';

describe('InvestasiComponent', () => {
  let component: InvestasiComponent;
  let fixture: ComponentFixture<InvestasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
