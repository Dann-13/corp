import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas';
import { CompanyMongodbRepository } from './company-mongodb.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'company', schema: CompanySchema }]),
  ],
  providers: [CompanyMongodbRepository],
  exports: [CompanyMongodbRepository],
})
export class CompanyMongodbModule {}
