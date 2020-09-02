import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodosComponentComponent } from './edit-todos-component.component';

describe('EditTodosComponentComponent', () => {
  let component: EditTodosComponentComponent;
  let fixture: ComponentFixture<EditTodosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
