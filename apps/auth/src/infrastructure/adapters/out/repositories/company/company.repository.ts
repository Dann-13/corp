import { Injectable } from '@nestjs/common';
import { CompanyRepositoryPort } from '../../../../../application/ports/out/repositories/company/company.repository.port';
import { CompanyRegisterRequestDto } from '../../../../../application/ports/in/dtos';
import { CompanyResponseDto } from '../../../../../application/ports/out/dtos/company-response.dto';
import type { CompanyWithPasswordDto } from '../../../../../application/ports/out/dtos/company-with-password.dto';
import { CompanyMongodbRepository } from '../../database/mongodb';

@Injectable()
export class CompanyRepository implements CompanyRepositoryPort {
  constructor(
    private readonly companyMongodbRepository: CompanyMongodbRepository,
  ) {}

  async create(
    payload: CompanyRegisterRequestDto & {
      uuid: string;
      hashedPassword: string;
    },
  ): Promise<CompanyResponseDto> {
    return await this.companyMongodbRepository.create(payload);
  }

  async findByEmail(email: string): Promise<CompanyResponseDto | null> {
    return await this.companyMongodbRepository.findByEmail(email);
  }

  async findByEmailWithPassword(
    email: string,
  ): Promise<CompanyWithPasswordDto | null> {
    return await this.companyMongodbRepository.findByEmailWithPassword(email);
  }
}
