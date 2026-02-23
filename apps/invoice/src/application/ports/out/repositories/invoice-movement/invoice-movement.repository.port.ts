import type { InvoiceMovementCreateRequestDto } from '../../../in/dtos';
import type { InvoiceMovementResponseDto } from '../../dtos';

export interface InvoiceMovementRepositoryPort {
  create(
    payload: InvoiceMovementCreateRequestDto & { uuid: string },
  ): Promise<InvoiceMovementResponseDto>;
}

export const INVOICE_MOVEMENT_REPOSITORY_PORT = Symbol(
  'INVOICE_MOVEMENT_REPOSITORY_PORT',
);
