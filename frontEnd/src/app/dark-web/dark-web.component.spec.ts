import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkWebComponent } from './dark-web.component';

describe('DarkWebComponent', () => {
  let component: DarkWebComponent;
  let fixture: ComponentFixture<DarkWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
