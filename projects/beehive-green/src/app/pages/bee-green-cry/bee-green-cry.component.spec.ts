import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeGreenCryComponent } from './bee-green-cry.component';

describe('BeeGreenCryComponent', () => {
  let component: BeeGreenCryComponent;
  let fixture: ComponentFixture<BeeGreenCryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeGreenCryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeGreenCryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
