import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Inject, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto';
import { UpdateAuthDto } from './dto';
import { JwtGuard } from './auth.guard';
import { Role } from './entities';
import { RolesGuard } from './roles.guard';
import { Roles } from './decorators/has-roles.decorator';
import { BadRequestException } from './exceptions';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    try {
      return this.authService.createUser(createAuthDto);
      // return "Signup ok"
    } catch (error) {
      console.log("Entra en el catch del signup");
      console.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  @Post('/login')
  login(@Body() loginUserDto: any) {
    //Generic exception
    // throw new HttpException("Exception on login", HttpStatus.BAD_REQUEST)

    throw new BadRequestException()
    return this.authService.login()
  }

  //With this decorator we mark this endpoint only available for admin role
  @Roles(Role.ADMIN)
  @UseGuards(
    JwtGuard, //Check JWT is valid
    RolesGuard //Check roles and validate with the role marked in HasRoles
  )
  @Get('/users')
  findAll() {
    return this.authService.findAll();
  }
  
  //Only authorized users can get this (role admin)
  @Get('/users/:id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Patch('/users/:id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete('/users/:id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
