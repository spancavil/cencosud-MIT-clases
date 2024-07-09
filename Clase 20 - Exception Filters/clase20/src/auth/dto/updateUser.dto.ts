import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './signUp.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
