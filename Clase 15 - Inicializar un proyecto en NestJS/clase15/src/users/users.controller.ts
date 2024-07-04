import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('todos')
  public getUsers() {
    return [
      {
        id: 1,
        email: 'test@test.com',
      },
      {
        id: 2,
        email: 'test2@test.com',
      },
    ];
  }

  @Get('todos2')
  public getUsers2() {
    return [
      {
        id: 1,
        email: 'test@test.com',
      },
      {
        id: 2,
        email: 'test2@test.com',
      },
    ];
  }
}
