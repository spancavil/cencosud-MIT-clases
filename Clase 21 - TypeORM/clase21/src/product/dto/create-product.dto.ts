import { OmitType } from '@nestjs/mapped-types';
import { Product } from '../entities/product.entity';
import { IsPositive, IsString } from 'class-validator';

export class CreateProductDto extends OmitType(Product, ['id']) {
  @IsString()
  name: string;

  @IsPositive()
  price: number;
}
