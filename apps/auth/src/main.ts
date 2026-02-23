import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  // Configuración OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('Authentication and authorization service')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Servir el JSON de OpenAPI en /api-json
  app.use('/api-json', (_req: Request, res: Response) => {
    res.json(document);
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
