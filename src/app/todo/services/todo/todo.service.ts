import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) {}

  getTodos(): Observable<Todo[]> {
    // TODO get todos from /api/todos
    return empty();
  }

}
