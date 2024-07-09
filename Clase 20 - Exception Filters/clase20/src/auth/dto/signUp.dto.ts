import {IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword} from 'class-validator'

export class CreateAuthDto {

    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    name?: string
}
