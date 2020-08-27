import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaratuleComponent } from './taratule.component';

describe('TaratuleComponent', () => {
  let component: TaratuleComponent;
  let fixture: ComponentFixture<TaratuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaratuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaratuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
