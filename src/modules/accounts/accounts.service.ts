import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  getHello(): string {
    return 'Hello World! some output text from accounts.service.ts';
  }
}
