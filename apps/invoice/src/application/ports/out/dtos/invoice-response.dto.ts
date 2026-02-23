export class InvoiceResponseDto {
  uuid: string;
  company: string;
  invoiceNumber: string;
  supplier: string;
  total: number;
  currency: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
