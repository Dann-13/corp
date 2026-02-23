import type { CompanyRegisterRequestDto } from '../dtos';
import type { CompanyResponseDto } from '../../out/dtos';

export interface CompanyRegisterUseCasePort {
  execute(payload: CompanyRegisterRequestDto): Promise<CompanyResponseDto>;
}

export const COMPANY_REGISTER_USE_CASE_PORT = Symbol(
  'COMPANY_REGISTER_USE_CASE_PORT',
);
