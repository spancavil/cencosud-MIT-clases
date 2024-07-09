import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './signUp.dto';

export class UpdateAuthDto extends PartialType(CreateUserDTO) {}
