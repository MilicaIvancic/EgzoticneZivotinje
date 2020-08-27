import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeDetailsComponent } from './snake-details.component';

describe('SnakeDetailsComponent', () => {
  let component: SnakeDetailsComponent;
  let fixture: ComponentFixture<SnakeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
