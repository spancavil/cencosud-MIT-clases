import { HttpException, HttpStatus } from "@nestjs/common";

export class BadRequestException extends HttpException {
    constructor() {
        super('Request mala', HttpStatus.BAD_REQUEST)
    }
}