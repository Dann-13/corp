import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type InvoiceDocument = Invoice & mongoose.Document;

@Schema({ collection: 'invoices' })
export class Invoice {
  @Prop({ type: String, required: true, index: true, unique: true })
  uuid: string;

  @Prop({ type: String, required: true, index: true })
  company: string;

  @Prop({ type: String, required: true, index: true, unique: true })
  invoiceNumber: string;

  @Prop({ type: String, required: true })
  supplier: string;

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: String, required: true, default: 'COP' })
  currency: string;

  @Prop({ type: String, required: true })
  status: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
