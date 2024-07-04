import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto) {
    const task = new Task();

    task.id = this.tasks.length + 1;
    task.title = createTaskDto.title;
    task.content = createTaskDto.content;

    this.tasks.push(task);
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    let task = this.findOne(id);

    task = { ...task, ...updateTaskDto };

    return task;
  }

  remove(id: number) {
    const task = this.findOne(id);

    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
