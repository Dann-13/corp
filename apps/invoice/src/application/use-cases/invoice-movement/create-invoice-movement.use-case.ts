import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { InvoiceMovementCreateRequestDto } from '../../ports/in/dtos';
import { InvoiceMovementResponseDto } from '../../ports/out/dtos';
import {
  INVOICE_MOVEMENT_REPOSITORY_PORT,
  type InvoiceMovementRepositoryPort,
} from '../../ports/out/repositories/invoice-movement';
import { InvoiceMovementCreateUseCasePort } from '../../ports/in/use-cases/invoice-movement-create.use-case.port';

@Injectable()
export class InvoiceMovementCreateUseCase implements InvoiceMovementCreateUseCasePort {
  constructor(
    @Inject(INVOICE_MOVEMENT_REPOSITORY_PORT)
    private readonly repository: InvoiceMovementRepositoryPort,
  ) {}

  async execute(
    payload: InvoiceMovementCreateRequestDto,
  ): Promise<InvoiceMovementResponseDto> {
    return await this.repository.create({
      ...payload,
      uuid: randomUUID(),
    });
  }
}
