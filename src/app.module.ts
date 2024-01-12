import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './modules/accounts/accounts.module';
import { Account } from './modules/accounts/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'wallet',
      entities: [Account],
      synchronize: true
    }),
    AccountsModule
  ]
})
export class AppModule {}
