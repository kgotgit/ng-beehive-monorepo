import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeRedAngryComponent } from './bee-red-angry.component';

describe('BeeRedAngryComponent', () => {
  let component: BeeRedAngryComponent;
  let fixture: ComponentFixture<BeeRedAngryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeRedAngryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeRedAngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
