import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticsAnimalsComponent } from './exotics-animals.component';

describe('ExoticsAnimalsComponent', () => {
  let component: ExoticsAnimalsComponent;
  let fixture: ComponentFixture<ExoticsAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticsAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticsAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
