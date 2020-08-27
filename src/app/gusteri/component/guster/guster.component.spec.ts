import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GusterComponent } from './guster.component';

describe('GusterComponent', () => {
  let component: GusterComponent;
  let fixture: ComponentFixture<GusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
