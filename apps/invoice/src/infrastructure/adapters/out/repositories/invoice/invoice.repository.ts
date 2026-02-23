import { Injectable } from '@nestjs/common';
import {
  type InvoiceRepositoryPort,
  type InvoiceCreateRequestDto,
  type InvoiceResponseDto,
} from '../../../../../application/ports';
import { InvoiceMongodbRepository } from '../../database/mongodb';

@Injectable()
export class InvoiceRepository implements InvoiceRepositoryPort {
  constructor(
    private readonly invoiceMongodbRepository: InvoiceMongodbRepository,
  ) {}

  async create(
    payload: InvoiceCreateRequestDto & { uuid: string },
  ): Promise<InvoiceResponseDto> {
    return await this.invoiceMongodbRepository.create(payload);
  }
}
