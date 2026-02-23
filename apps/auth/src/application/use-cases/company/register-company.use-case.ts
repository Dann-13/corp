import { Inject, Injectable, ConflictException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import { CompanyRegisterRequestDto } from '../../ports/in/dtos';
import { CompanyResponseDto } from '../../ports/out/dtos';
import {
  COMPANY_REPOSITORY_PORT,
  type CompanyRepositoryPort,
} from '../../ports/out/repositories';
import { type CompanyRegisterUseCasePort } from '../../ports/in/use-cases';

@Injectable()
export class CompanyRegisterUseCase implements CompanyRegisterUseCasePort {
  constructor(
    @Inject(COMPANY_REPOSITORY_PORT)
    private readonly repository: CompanyRepositoryPort,
  ) {}

  async execute(
    payload: CompanyRegisterRequestDto,
  ): Promise<CompanyResponseDto> {
    // Verificar si el email ya existe
    const existingCompany = await this.repository.findByEmail(payload.email);
    if (existingCompany) {
      throw new ConflictException('Email already registered');
    }

    // Hashear password con bcrypt (10 rounds)
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    return await this.repository.create({
      ...payload,
      uuid: randomUUID(),
      hashedPassword,
    });
  }
}
