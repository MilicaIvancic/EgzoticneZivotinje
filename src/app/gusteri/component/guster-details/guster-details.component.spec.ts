import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GusterDetailsComponent } from './guster-details.component';

describe('GusterDetailsComponent', () => {
  let component: GusterDetailsComponent;
  let fixture: ComponentFixture<GusterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GusterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
