import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBeehiveUISharedComponent } from './lib-beehive-ui-shared.component';

describe('LibBeehiveUISharedComponent', () => {
  let component: LibBeehiveUISharedComponent;
  let fixture: ComponentFixture<LibBeehiveUISharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibBeehiveUISharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBeehiveUISharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
