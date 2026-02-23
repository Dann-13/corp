import { NestFactory } from '@nestjs/core';
import { InvoiceModule } from './invoice.module';

async function bootstrap() {
  const app = await NestFactory.create(InvoiceModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
