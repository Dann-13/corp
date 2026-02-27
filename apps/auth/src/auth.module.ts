import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CoreDatabaseModule } from '@core';
import {
  CompanyRegisterController,
  CompanyLoginController,
  DocsController,
  HealthController,
} from './infrastructure/adapters/in/controllers';
import { CompanyMongodbModule } from './infrastructure/adapters/out/database/mongodb';
import { CompanyRepository } from './infrastructure/adapters/out/repositories';
import {
  CompanyRegisterUseCase,
  CompanyLoginUseCase,
} from './application/use-cases';
import {
  COMPANY_REGISTER_USE_CASE_PORT,
  COMPANY_LOGIN_USE_CASE_PORT,
} from './application/ports/in/use-cases';
import { COMPANY_REPOSITORY_PORT } from './application/ports/out/repositories';

@Module({
  imports: [
    CoreDatabaseModule.forRoot({ appName: 'auth' }),
    CompanyMongodbModule,
    // Configuración de JWT
    JwtModule.register({
      global: true, // Hace que JwtService esté disponible globalmente
      secret: process.env.JWT_SECRET || 'super-secret-key-change-in-production',
      signOptions: {
        issuer: 'corp-auth-service',
      },
    }),
  ],
  controllers: [
    CompanyRegisterController,
    CompanyLoginController,
    DocsController,
    HealthController,
  ],
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
    {
      provide: COMPANY_LOGIN_USE_CASE_PORT,

      useClass: CompanyLoginUseCase,
    },
  ],
})
export class AuthModule {}
