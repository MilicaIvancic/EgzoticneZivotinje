import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmijeComponent } from './zmije.component';

describe('ZmijeComponent', () => {
  let component: ZmijeComponent;
  let fixture: ComponentFixture<ZmijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
