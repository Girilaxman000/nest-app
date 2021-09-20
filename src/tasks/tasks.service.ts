import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() //shared accross an application.
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  // async getTaskById(id: string): Promise<Task> {
  //   const found = await this.taskRepository.findOne(id);
  //   if (!found) {
  //     throw new NotFoundException('Task Not Found');
  //   }
  //   return found;
  // }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO);
  }

  // private tasks: Task[] = []; //private is needed so that other parts cann't chnage or mutate.
  // task: Task[] = [
  //   {
  //     id: '8f8b7b89-1c86-4385-8cd7-a023a0e04556',
  //     title: 'hiii k xa',
  //     description: 'value k xa',
  //     status: TaskStatus.OPEN,
  //   },
  //   {
  //     id: '8f8b7b89-1c86-4385-8c-a023a0e04556',
  //     title: 'hwllo k xa',
  //     description: 'val k xa',
  //     status: TaskStatus.IN_PROGRESS,
  //   },
  // ];
  // getAllTasks(): Task[] {
  //   console.log('Gt all');
  //   //by default accessor is public.
  //   return this.task;
  // }
  // getTasksWithFilters(filterDTO: GetTaskFilterDTO): Task[] {
  //   const { status, search } = filterDTO;
  //   //temporary array to hold data
  //   let tasks: Task[] = this.getAllTasks();
  //   //do sth with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   //dp sth with search
  //   //return that result
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   return this.task.find((task) => task.id === id);
  // }
  // createTask(createTaskDTO: CreateTaskDTO): Task {
  //   const { title, description } = createTaskDTO;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTask(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
