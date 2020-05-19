import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentifierComponent } from './identifier.component';
describe('IdentifierComponent', () => {
  let component: IdentifierComponent;
  let fixture: ComponentFixture<IdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
