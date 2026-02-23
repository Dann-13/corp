import type { InvoiceCreateRequestDto } from '../../../in/dtos';
import type { InvoiceResponseDto } from '../../dtos';

export interface InvoiceRepositoryPort {
  create(
    payload: InvoiceCreateRequestDto & { uuid: string },
  ): Promise<InvoiceResponseDto>;
}

export const INVOICE_REPOSITORY_PORT = Symbol('INVOICE_REPOSITORY_PORT');
