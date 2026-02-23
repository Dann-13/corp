import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyResponseDto } from '../../../../../application/ports/out/dtos';
import { CompanyDocument } from './schemas';

export type CompanyCreatePayload = {
  uuid: string;
  name: string;
  email: string;
  hashedPassword: string;
  address: string;
};

@Injectable()
export class CompanyMongodbRepository {
  constructor(
    @InjectModel('company')
    private readonly companyModel: Model<CompanyDocument>,
  ) {}

  async create(payload: CompanyCreatePayload): Promise<CompanyResponseDto> {
    const now = new Date();
    const newCompany = new this.companyModel({
      ...payload,
      password: payload.hashedPassword,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    });

    const savedCompany = await newCompany.save();
    const data = savedCompany.toObject();

    return {
      uuid: data.uuid,
      name: data.name,
      email: data.email,
      address: data.address,
      isActive: data.isActive,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }

  async findByEmail(email: string): Promise<CompanyResponseDto | null> {
    const company = await this.companyModel
      .findOne({ email: email.toLowerCase() })
      .lean()
      .exec();

    if (!company) return null;

    return {
      uuid: company.uuid,
      name: company.name,
      email: company.email,
      address: company.address,
      isActive: company.isActive,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    };
  }
}
