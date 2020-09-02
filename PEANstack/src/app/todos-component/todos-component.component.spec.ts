import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponentComponent } from './todos-component.component';

describe('TodosComponentComponent', () => {
  let component: TodosComponentComponent;
  let fixture: ComponentFixture<TodosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
