import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvoiceResponseDto } from '../../../../../application/ports/out/dtos';
import { InvoiceDocument } from './schemas';

export type InvoiceCreatePayload = {
  uuid: string;
  company: string;
  invoiceNumber: string;
  supplier: string;
  total: number;
  currency?: string;
};

@Injectable()
export class InvoiceMongodbRepository {
  constructor(
    @InjectModel('invoice')
    private readonly invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(payload: InvoiceCreatePayload): Promise<InvoiceResponseDto> {
    const now = new Date();
    const newInvoice = new this.invoiceModel({
      ...payload,
      currency: payload.currency || 'COP',
      status: 'DRAFT',
      createdAt: now,
      updatedAt: now,
    });

    const savedInvoice = await newInvoice.save();
    const data = savedInvoice.toObject();

    return {
      uuid: data.uuid,
      company: data.company,
      invoiceNumber: data.invoiceNumber,
      supplier: data.supplier,
      total: data.total,
      currency: data.currency,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}
