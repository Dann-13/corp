import { ApiProperty } from '@nestjs/swagger';

export class InvoiceResponseDto {
  @ApiProperty({
    description: 'Invoice unique identifier (UUID)',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  uuid: string;

  @ApiProperty({
    description: 'Company UUID',
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
    description: 'Currency code',
    example: 'USD',
  })
  currency: string;

  @ApiProperty({
    description: 'Invoice status',
    example: 'pending',
    enum: ['pending', 'paid', 'cancelled'],
  })
  status: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-01-01T00:00:00.000Z',
  })
  updatedAt: Date;
}
