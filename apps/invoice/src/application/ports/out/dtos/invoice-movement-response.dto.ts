export class InvoiceMovementResponseDto {
  uuid: string;
  company: string;
  invoice: string;
  product: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
