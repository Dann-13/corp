import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceMovementResponseDto } from '../../../../../application/ports/out/dtos';
import { InvoiceMovementDocument } from './schemas';

export type InvoiceMovementCreatePayload = {
  uuid: string;
  company: string;
  invoice: string;
  product: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  description?: string;
};

@Injectable()
export class InvoiceMovementMongodbRepository {
  constructor(
    @InjectModel('invoiceMovement')
    private readonly invoiceMovementModel: Model<InvoiceMovementDocument>,
  ) {}

  async create(
    payload: InvoiceMovementCreatePayload,
  ): Promise<InvoiceMovementResponseDto> {
    const now = new Date();
    const newMovement = new this.invoiceMovementModel({
      ...payload,
      createdAt: now,
      updatedAt: now,
    });

    const savedMovement = await newMovement.save();
    const data = savedMovement.toObject();

    return {
      uuid: data.uuid,
      company: data.company,
      invoice: data.invoice,
      product: data.product,
      quantity: data.quantity,
      unitPrice: data.unitPrice,
      subtotal: data.subtotal,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}
