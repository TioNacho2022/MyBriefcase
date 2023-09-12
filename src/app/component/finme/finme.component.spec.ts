import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinmeComponent } from './finme.component';

describe('FinmeComponent', () => {
  let component: FinmeComponent;
  let fixture: ComponentFixture<FinmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
