import { Component, inject, OnInit, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent  {

  injectedTasksService = inject(TasksService);

  selectedFilter = signal<string>('all');
  tasks  = this.injectedTasksService.getTasks();

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
