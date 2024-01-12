import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiResponse({ status: 200, description: 'Hello World!' })
  @Get('/')
  getHello(): string {
    return this.accountsService.getHello();
  }
}
