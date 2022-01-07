import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../config/config';

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  // fetch tasks
  getTasks(): Observable<any> {
    return this.http.get<any>(config.API_URL + config.URL.tasks);
  }
}
