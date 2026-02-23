export class InvoiceMovementCreateRequestDto {
  company: string;
  invoice: string;
  product: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  description?: string;
}
