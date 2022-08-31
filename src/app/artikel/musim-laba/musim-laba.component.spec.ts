import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusimLabaComponent } from './musim-laba.component';

describe('MusimLabaComponent', () => {
  let component: MusimLabaComponent;
  let fixture: ComponentFixture<MusimLabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusimLabaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusimLabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
