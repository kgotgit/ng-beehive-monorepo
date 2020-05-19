import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeBlueShockComponent } from './bee-blue-shock.component';

describe('BeeBlueShockComponent', () => {
  let component: BeeBlueShockComponent;
  let fixture: ComponentFixture<BeeBlueShockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeBlueShockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeBlueShockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
