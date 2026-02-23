import type { CompanyRegisterRequestDto } from '../../../in/dtos';
import type { CompanyResponseDto } from '../../dtos';

export interface CompanyRepositoryPort {
  create(
    payload: CompanyRegisterRequestDto & {
      uuid: string;
      hashedPassword: string;
    },
  ): Promise<CompanyResponseDto>;
  findByEmail(email: string): Promise<CompanyResponseDto | null>;
}

export const COMPANY_REPOSITORY_PORT = Symbol('COMPANY_REPOSITORY_PORT');
