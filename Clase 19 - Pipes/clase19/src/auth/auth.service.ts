import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { UpdateAuthDto } from './dto';
import { Role, User } from './entities';
import { UuidService } from 'nestjs-uuid';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(
    private readonly uuidService: UuidService,
    private readonly jwtServ: JwtService,
  ) {}

  createUser(createAuthDto: CreateUserDTO) {
    const newUser = {
      ...createAuthDto,
      id: randomUUID(),
    };
    this.users.push(newUser);
    return newUser;
  }

  login() {
    //Add logic to get authenticated user
    return this.jwtServ.sign(
      {
        role: Role.USER,
      },
      {
        secret: process.env.JWT_SECRET,
      },
    );
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === String(id));
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  validateToken(token: string) {
    return this.jwtServ.verify(token, { secret: process.env.JWT_SECRET });
  }
}
