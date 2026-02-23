import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreDatabaseModule } from '@core';
import { InvoiceCreateController } from './infrastructure/adapters/in/controllers/invoice';
import { InvoiceMovementCreateController } from './infrastructure/adapters/in/controllers/invoice-movement';
import { HealthController } from './infrastructure/adapters/in/controllers/health';
import {
  INVOICE_CREATE_USE_CASE_PORT,
  INVOICE_MOVEMENT_CREATE_USE_CASE_PORT,
} from './application/ports/in/use-cases';
import {
  InvoiceCreateUseCase,
  InvoiceMovementCreateUseCase,
} from './application/use-cases';
import {
  INVOICE_REPOSITORY_PORT,
  INVOICE_MOVEMENT_REPOSITORY_PORT,
} from './application/ports/out/repositories';
import {
  InvoiceRepository,
  InvoiceMovementRepository,
} from './infrastructure/adapters/out/repositories';
import {
  InvoiceMongodbModule,
  InvoiceMovementMongodbModule,
} from './infrastructure/adapters/out/database/mongodb';

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
    InvoiceMovementMongodbModule,
  ],
  controllers: [
    InvoiceCreateController,
    InvoiceMovementCreateController,
    HealthController,
  ],
  providers: [
    {
      provide: INVOICE_REPOSITORY_PORT,
      useClass: InvoiceRepository,
    },
    {
      provide: INVOICE_CREATE_USE_CASE_PORT,
      useClass: InvoiceCreateUseCase,
    },
    {
      provide: INVOICE_MOVEMENT_REPOSITORY_PORT,
      useClass: InvoiceMovementRepository,
    },
    {
      provide: INVOICE_MOVEMENT_CREATE_USE_CASE_PORT,
      useClass: InvoiceMovementCreateUseCase,
    },
  ],
})
export class InvoiceModule {}
