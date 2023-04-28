import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishManagerComponent } from './finish-manager.component';

describe('FinishManagerComponent', () => {
  let component: FinishManagerComponent;
  let fixture: ComponentFixture<FinishManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
