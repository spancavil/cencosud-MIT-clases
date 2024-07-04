import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {

  @Get()
  findAll(): string{
    return 'This action returns all users';
  }

  @Get(':id')
  findByid(@Param('id', ParseIntPipe) id: number): string {
    console.log(id);
    return `This action returns a #${id} user`;
  }
  
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);    
    return 'This action adds a new user';
  }

}
