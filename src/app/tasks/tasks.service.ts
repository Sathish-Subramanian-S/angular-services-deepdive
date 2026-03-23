import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = signal<Task[]>([]);

  getTasks(selectedFilter: string) {
    let allTasks = this.tasks();
    return allTasks.filter(task => selectedFilter === 'all' || task?.status === selectedFilter?.toUpperCase());
  }

  addTask(title: string, description: string) {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 15), // Generate a random ID
      title,
      description,
      status: 'OPEN'
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]); 
  }   
}
