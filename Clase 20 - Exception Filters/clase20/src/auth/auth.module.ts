import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UuidModule } from 'nestjs-uuid';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UuidModule,
    JwtModule.register({
      signOptions: { expiresIn: '1h' },
    }),  
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
