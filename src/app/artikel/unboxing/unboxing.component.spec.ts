import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboxingComponent } from './unboxing.component';

describe('UnboxingComponent', () => {
  let component: UnboxingComponent;
  let fixture: ComponentFixture<UnboxingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnboxingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
