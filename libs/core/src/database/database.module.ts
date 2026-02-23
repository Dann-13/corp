import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModuleOptions } from './interfaces/database-module-options.interface';
import { Environment } from './types/environment.type';

@Module({})
export class CoreDatabaseModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    const envVarName = options.envVarName ?? 'MONGODB_URI';

    return {
      module: CoreDatabaseModule,
      imports: [
        ConfigModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => {
            const nodeEnv = configService.get<Environment>('NODE_ENV', 'local');
            const envUri = configService.get<string>(envVarName);

            const defaultUris: Record<Environment, string> = {
              local: 'mongodb://127.0.0.1:27017/corp-local',
              development: 'mongodb://127.0.0.1:27017/corp-dev',
              production: 'mongodb://127.0.0.1:27017/corp-prod',
              ...options.defaultUris,
            };

            return {
              uri: envUri || defaultUris[nodeEnv] || defaultUris.local,
              retryAttempts: 3,
              retryDelay: 1000,
            };
          },
          inject: [ConfigService],
        }),
      ],
      exports: [MongooseModule],
    };
  }
}
