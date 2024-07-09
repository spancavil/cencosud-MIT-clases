import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ProductImage } from './product/entities/product-image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',

      host: 'localhost',
      port: 3306,
      database: 'database',
      username: 'user',
      password: 'passs',

      entities: [User, Product, ProductImage],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
