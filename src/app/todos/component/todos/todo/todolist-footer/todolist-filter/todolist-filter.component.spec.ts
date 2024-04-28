import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistFilterComponent } from './todolist-filter.component';

describe('TodolistFilterComponent', () => {
  let component: TodolistFilterComponent;
  let fixture: ComponentFixture<TodolistFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistFilterComponent]
    });
    fixture = TestBed.createComponent(TodolistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
