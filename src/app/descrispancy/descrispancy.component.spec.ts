import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrispancyComponent } from './descrispancy.component';

describe('DescrispancyComponent', () => {
  let component: DescrispancyComponent;
  let fixture: ComponentFixture<DescrispancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrispancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescrispancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
