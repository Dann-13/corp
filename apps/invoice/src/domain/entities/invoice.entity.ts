export class InvoiceEntity {
  uuid: string;
  invoiceNumber: string;
  customerName: string;
  total: number;
  currency: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
