import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipsExplainedComponent } from './snips-explained.component';

describe('SnipsExplainedComponent', () => {
  let component: SnipsExplainedComponent;
  let fixture: ComponentFixture<SnipsExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnipsExplainedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnipsExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
