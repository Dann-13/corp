import { ApiProperty } from '@nestjs/swagger';

export class InvoiceMovementResponseDto {
  @ApiProperty({
    description: 'Movement unique identifier (UUID)',
    example: '789e0123-e45b-67d8-9012-345678901234',
  })
  uuid: string;

  @ApiProperty({
    description: 'Company UUID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  company: string;

  @ApiProperty({
    description: 'Invoice UUID (foreign key)',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  invoice: string;

  @ApiProperty({
    description: 'Product name or code',
    example: 'Laptop Dell XPS 15',
  })
  product: string;

  @ApiProperty({
    description: 'Quantity',
    example: 2,
  })
  quantity: number;

  @ApiProperty({
    description: 'Unit price',
    example: 1200.0,
  })
  unitPrice: number;

  @ApiProperty({
    description: 'Subtotal',
    example: 2400.0,
  })
  subtotal: number;

  @ApiProperty({
    description: 'Movement description',
    example: 'High-performance laptop for development team',
    required: false,
  })
  description?: string;

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
