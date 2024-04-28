import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistFooterComponent } from './todolist-footer.component';

describe('TodolistFooterComponent', () => {
  let component: TodolistFooterComponent;
  let fixture: ComponentFixture<TodolistFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistFooterComponent]
    });
    fixture = TestBed.createComponent(TodolistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
