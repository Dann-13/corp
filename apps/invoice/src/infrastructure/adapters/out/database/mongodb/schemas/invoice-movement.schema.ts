import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type InvoiceMovementDocument = InvoiceMovement & mongoose.Document;

@Schema({ collection: 'invoice_movements' })
export class InvoiceMovement {
  @Prop({ type: String, required: true, index: true, unique: true })
  uuid: string;

  @Prop({ type: String, required: true, index: true })
  company: string;

  @Prop({ type: String, required: true, index: true })
  invoice: string;

  @Prop({ type: String, required: true })
  product: string;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, required: true })
  unitPrice: number;

  @Prop({ type: Number, required: true })
  subtotal: number;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const InvoiceMovementSchema =
  SchemaFactory.createForClass(InvoiceMovement);
