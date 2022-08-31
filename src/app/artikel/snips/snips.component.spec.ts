import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipsComponent } from './snips.component';

describe('SnipsComponent', () => {
  let component: SnipsComponent;
  let fixture: ComponentFixture<SnipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
