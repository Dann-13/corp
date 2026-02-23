import { Module } from '@nestjs/common';
import { CoreDatabaseModule } from '@core';
import {
  CompanyRegisterController,
  DocsController,
  HealthController,
} from './infrastructure/adapters/in/controllers';
import { CompanyMongodbModule } from './infrastructure/adapters/out/database/mongodb';
import { CompanyRepository } from './infrastructure/adapters/out/repositories';
import { CompanyRegisterUseCase } from './application/use-cases';
import { COMPANY_REGISTER_USE_CASE_PORT } from './application/ports/in/use-cases';
import { COMPANY_REPOSITORY_PORT } from './application/ports/out/repositories';

@Module({
  imports: [
    CoreDatabaseModule.forRoot({ appName: 'auth' }),
    CompanyMongodbModule,
  ],
  controllers: [CompanyRegisterController, DocsController, HealthController],
  providers: [
    CompanyRepository,
    {
      provide: COMPANY_REPOSITORY_PORT,
      useClass: CompanyRepository,
    },
    {
      provide: COMPANY_REGISTER_USE_CASE_PORT,
      useClass: CompanyRegisterUseCase,
    },
  ],
})
export class AuthModule {}
