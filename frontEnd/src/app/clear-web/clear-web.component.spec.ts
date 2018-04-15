import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearWebComponent } from './clear-web.component';

describe('ClearWebComponent', () => {
  let component: ClearWebComponent;
  let fixture: ComponentFixture<ClearWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
