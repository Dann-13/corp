import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  // ✅ Habilitar CORS para permitir conexiones desde Expo
  app.enableCors({
    origin: '*', // Permitir todos los orígenes en desarrollo
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

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

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  // 🎯 Logs informativos
  console.log('');
  console.log('🚀 ========================================');
  console.log(`📡 Auth Service running on: http://localhost:${port}`);
  console.log(`📚 Swagger Docs: http://localhost:${port}/api-json`);
  console.log(
    `🔐 Company Register: http://localhost:${port}/companies/register`,
  );
  console.log('========================================');
  console.log('');
}
void bootstrap();
