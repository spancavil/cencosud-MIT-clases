import { OmitType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto extends OmitType(User, ['id', 'isActive']) {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(4)
  password: string;
}
