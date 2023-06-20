import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {
    url = "http://localhost:3000"
    tasks = []

    async getTasks() {
      const res = await fetch(this.url)
      const data = await res.json()
      this.tasks = data
    }

    ngOnInit(){
        this.getTasks()
    }
}
