import { ApiProperty } from '@nestjs/swagger';

export class InvoiceCreateRequestDto {
  @ApiProperty({
    description: 'Company UUID (multi-tenant identifier)',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  company: string;

  @ApiProperty({
    description: 'Invoice number',
    example: 'INV-2024-001',
  })
  invoiceNumber: string;

  @ApiProperty({
    description: 'Supplier name',
    example: 'Acme Supplies Inc.',
  })
  supplier: string;

  @ApiProperty({
    description: 'Total amount',
    example: 1500.5,
  })
  total: number;

  @ApiProperty({
    description: 'Currency code (ISO 4217)',
    example: 'USD',
  })
  currency?: string;
}
