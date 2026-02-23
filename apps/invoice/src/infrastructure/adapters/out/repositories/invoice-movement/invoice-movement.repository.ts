import { Injectable } from '@nestjs/common';
import { InvoiceMovementRepositoryPort } from '../../../../../application/ports/out/repositories/invoice-movement';
import { InvoiceMovementCreateRequestDto } from '../../../../../application/ports/in/dtos';
import { InvoiceMovementResponseDto } from '../../../../../application/ports/out/dtos';
import { InvoiceMovementMongodbRepository } from '../../database/mongodb';

@Injectable()
export class InvoiceMovementRepository implements InvoiceMovementRepositoryPort {
  constructor(
    private readonly invoiceMovementMongodbRepository: InvoiceMovementMongodbRepository,
  ) {}

  async create(
    payload: InvoiceMovementCreateRequestDto & { uuid: string },
  ): Promise<InvoiceMovementResponseDto> {
    return await this.invoiceMovementMongodbRepository.create(payload);
  }
}
