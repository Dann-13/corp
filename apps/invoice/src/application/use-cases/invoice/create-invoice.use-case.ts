import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { InvoiceCreateRequestDto } from '../../ports/in/dtos';
import { InvoiceResponseDto } from '../../ports/out/dtos';
import {
  INVOICE_REPOSITORY_PORT,
  type InvoiceRepositoryPort,
} from '../../ports/out/repositories';
import { type InvoiceCreateUseCasePort } from '../../ports/in/use-cases';

@Injectable()
export class InvoiceCreateUseCase implements InvoiceCreateUseCasePort {
  constructor(
    @Inject(INVOICE_REPOSITORY_PORT)
    private readonly repository: InvoiceRepositoryPort,
  ) {}

  async execute(payload: InvoiceCreateRequestDto): Promise<InvoiceResponseDto> {
    return await this.repository.create({
      ...payload,
      uuid: randomUUID(),
    });
  }
}
