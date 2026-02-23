import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreDatabaseModule } from '@core';
import { InvoiceCreateController } from './infrastructure/adapters/in/controllers/invoice';
import { HealthController } from './infrastructure/adapters/in/controllers/health';
import { INVOICE_CREATE_USE_CASE_PORT } from './application/ports/in/use-cases';
import { InvoiceCreateUseCase } from './application/use-cases/invoice';
import { INVOICE_REPOSITORY_PORT } from './application/ports/out/repositories';
import { InvoiceRepository } from './infrastructure/adapters/out/repositories/invoice';
import { InvoiceMongodbModule } from './infrastructure/adapters/out/database/mongodb';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['./apps/invoice/.env', '.env'],
    }),
    CoreDatabaseModule.forRoot({
      appName: 'invoice',
    }),
    InvoiceMongodbModule,
  ],
  controllers: [InvoiceCreateController, HealthController],
  providers: [
    {
      provide: INVOICE_REPOSITORY_PORT,
      useClass: InvoiceRepository,
    },
    {
      provide: INVOICE_CREATE_USE_CASE_PORT,
      useClass: InvoiceCreateUseCase,
    },
  ],
})
export class InvoiceModule {}
