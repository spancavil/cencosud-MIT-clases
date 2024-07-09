import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RainbowExceptionFilter } from './exceptionFilter/rainbow-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new RainbowExceptionFilter());
  await app.listen(3000);
}
bootstrap();
