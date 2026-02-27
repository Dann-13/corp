import type { CompanyRegisterRequestDto } from '../../../in/dtos';
import type { CompanyResponseDto } from '../../dtos/company-response.dto';
import type { CompanyWithPasswordDto } from '../../dtos/company-with-password.dto';

export interface CompanyRepositoryPort {
  create(
    payload: CompanyRegisterRequestDto & {
      uuid: string;
      hashedPassword: string;
    },
  ): Promise<CompanyResponseDto>;
  findByEmail(email: string): Promise<CompanyResponseDto | null>;
  /**
   * Encuentra una compañía por email e incluye el password hasheado
   * Usado para autenticación
   */
  findByEmailWithPassword(
    email: string,
  ): Promise<CompanyWithPasswordDto | null>;
}

export const COMPANY_REPOSITORY_PORT = Symbol('COMPANY_REPOSITORY_PORT');
