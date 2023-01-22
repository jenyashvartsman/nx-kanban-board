import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from '../config/app.config';
import { ETaskStatus, ITaskModel } from '@nx-kanban-board/api';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly apiUrl = `${appConfig.apiUrlBase}/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITaskModel[]> {
    return this.http.get<ITaskModel[]>(this.apiUrl);
  }

  updateTasks(id: string, status: ETaskStatus): Observable<ITaskModel> {
    return this.http.put<ITaskModel>(
      `${this.apiUrl}/${id}/status/${status}`,
      null
    );
  }
}
