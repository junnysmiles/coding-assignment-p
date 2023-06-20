import { Component, OnInit } from '@angular/core';
import { TasksService } from '@app/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasksService : TasksService
  
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }

  ngOnInit() {}
}
