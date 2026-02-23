export class InvoiceCreateRequestDto {
  invoiceNumber: string;
  customerName: string;
  total: number;
  currency?: string;
}
