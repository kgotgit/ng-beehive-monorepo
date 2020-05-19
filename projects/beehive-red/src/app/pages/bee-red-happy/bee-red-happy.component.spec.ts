import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeRedHappyComponent } from './bee-red-happy.component';

describe('BeeRedHappyComponent', () => {
  let component: BeeRedHappyComponent;
  let fixture: ComponentFixture<BeeRedHappyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeRedHappyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeRedHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
