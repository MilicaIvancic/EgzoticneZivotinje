import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarantulaDetailsComponent } from './tarantula-details.component';

describe('TarantulaDetailsComponent', () => {
  let component: TarantulaDetailsComponent;
  let fixture: ComponentFixture<TarantulaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarantulaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarantulaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
