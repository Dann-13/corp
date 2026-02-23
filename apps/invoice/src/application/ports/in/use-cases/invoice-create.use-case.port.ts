import type { InvoiceCreateRequestDto } from '../dtos';
import type { InvoiceResponseDto } from '../../out/dtos';

export interface InvoiceCreateUseCasePort {
  execute(payload: InvoiceCreateRequestDto): Promise<InvoiceResponseDto>;
}

export const INVOICE_CREATE_USE_CASE_PORT = Symbol(
  'INVOICE_CREATE_USE_CASE_PORT',
);
