import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceMovementSchema } from './schemas';
import { InvoiceMovementMongodbRepository } from './invoice-movement-mongodb.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'invoiceMovement', schema: InvoiceMovementSchema },
    ]),
  ],
  providers: [InvoiceMovementMongodbRepository],
  exports: [InvoiceMovementMongodbRepository],
})
export class InvoiceMovementMongodbModule {}
