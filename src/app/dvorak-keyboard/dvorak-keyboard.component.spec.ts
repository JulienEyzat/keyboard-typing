import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvorakKeyboardComponent } from './dvorak-keyboard.component';

describe('DvorakKeyboardComponent', () => {
  let component: DvorakKeyboardComponent;
  let fixture: ComponentFixture<DvorakKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvorakKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvorakKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
