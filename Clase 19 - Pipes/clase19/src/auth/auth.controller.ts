import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Logger,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto';
import { UpdateAuthDto } from './dto';
import { JwtGuard } from './auth.guard';
import { Role } from './entities';
import { RolesGuard } from './roles.guard';
import { Roles } from './decorators/has-roles.decorator';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createAuthDto: CreateUserDTO) {
    return this.authService.createUser(createAuthDto);
  }

  @Post('/login')
  login(@Body() loginUserDto: any) {
    return this.authService.login();
  }

  //With this decorator we mark this endpoint only available for admin role
  @Roles(Role.ADMIN)
  @UseGuards(
    JwtGuard, //Check JWT is valid
    RolesGuard, //Check roles and validate with the role marked in HasRoles
  )
  @Get('/users')
  findAll() {
    return this.authService.findAll();
  }

  //Only authorized users can get this (role admin)
  @Get('/users/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`User ID -> ${id} [${typeof id}]`);

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
