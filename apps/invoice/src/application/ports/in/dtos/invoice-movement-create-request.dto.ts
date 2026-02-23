import { ApiProperty } from '@nestjs/swagger';

export class InvoiceMovementCreateRequestDto {
  @ApiProperty({
    description: 'Company UUID (multi-tenant identifier)',
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
    description: 'Subtotal (quantity * unitPrice)',
    example: 2400.0,
  })
  subtotal: number;

  @ApiProperty({
    description: 'Movement description (optional)',
    example: 'High-performance laptop for development team',
    required: false,
  })
  description?: string;
}
