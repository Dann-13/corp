export class InvoiceCreateRequestDto {
  company: string;
  invoiceNumber: string;
  supplier: string;
  total: number;
  currency?: string;
}
