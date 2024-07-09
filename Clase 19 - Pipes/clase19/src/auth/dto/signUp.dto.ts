import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
