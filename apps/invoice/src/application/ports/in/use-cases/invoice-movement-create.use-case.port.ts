import type { InvoiceMovementCreateRequestDto } from '../dtos';
import type { InvoiceMovementResponseDto } from '../../out/dtos';

export interface InvoiceMovementCreateUseCasePort {
  execute(
    payload: InvoiceMovementCreateRequestDto,
  ): Promise<InvoiceMovementResponseDto>;
}

export const INVOICE_MOVEMENT_CREATE_USE_CASE_PORT = Symbol(
  'INVOICE_MOVEMENT_CREATE_USE_CASE_PORT',
);
