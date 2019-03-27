import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Domain2Component } from './domain2.component';

describe('Domain2Component', () => {
  let component: Domain2Component;
  let fixture: ComponentFixture<Domain2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Domain2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Domain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
