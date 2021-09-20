import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';

@Controller('tasks') //decorator
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //in normal js we have
  //this.tasksService = taskService
  //this.name = name we get name from parametrs.

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.tasksService.getTaskById(id);
  // }
  // @Get()
  // ///tasks?status=OPEN&search=blabla
  // getTasks(@Query() filterDTO: GetTaskFilterDTO): Task[] {
  //   //if we have any filter defined, call tasksService.getTasksWithFilters
  //   //otherwise, just get all tasks.
  //   //http://localhost:3000/tasks?status=OPEN&search=hiii k xa
  //   if (Object.keys(filterDTO).length) {
  //     return this.tasksService.getTasksWithFilters(filterDTO);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTask(id, status);
  // }
}
