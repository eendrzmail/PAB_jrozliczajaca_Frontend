import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankEditDialogComponent } from './bank-edit-dialog.component';

describe('BankEditDialogComponent', () => {
  let component: BankEditDialogComponent;
  let fixture: ComponentFixture<BankEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
