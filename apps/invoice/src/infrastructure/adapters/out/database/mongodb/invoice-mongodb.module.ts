import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './schemas';
import { InvoiceMongodbRepository } from './invoice-mongodb.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'invoice', schema: InvoiceSchema }]),
  ],
  providers: [InvoiceMongodbRepository],
  exports: [InvoiceMongodbRepository],
})
export class InvoiceMongodbModule {}
