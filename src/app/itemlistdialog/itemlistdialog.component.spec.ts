import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistdialogComponent } from './itemlistdialog.component';

describe('ItemlistdialogComponent', () => {
  let component: ItemlistdialogComponent;
  let fixture: ComponentFixture<ItemlistdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemlistdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
