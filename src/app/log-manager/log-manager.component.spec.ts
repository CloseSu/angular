import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogManagerComponent } from './log-manager.component';

describe('LogManagerComponent', () => {
  let component: LogManagerComponent;
  let fixture: ComponentFixture<LogManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
