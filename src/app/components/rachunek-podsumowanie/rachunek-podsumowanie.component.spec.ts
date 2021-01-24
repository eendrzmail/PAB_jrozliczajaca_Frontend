import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RachunekPodsumowanieComponent } from './rachunek-podsumowanie.component';

describe('RachunekPodsumowanieComponent', () => {
  let component: RachunekPodsumowanieComponent;
  let fixture: ComponentFixture<RachunekPodsumowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachunekPodsumowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachunekPodsumowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
