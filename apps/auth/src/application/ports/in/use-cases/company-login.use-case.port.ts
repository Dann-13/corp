// prettier-ignore
import type {
  CompanyLoginRequestDto, CompanyLoginResponseDto,
} from '../dtos';

export const COMPANY_LOGIN_USE_CASE_PORT = Symbol(
  'COMPANY_LOGIN_USE_CASE_PORT',
);

/**
 * Port (interface) para el caso de uso de login de compañía
 * Define el contrato que debe cumplir la implementación
 */
export interface CompanyLoginUseCasePort {
  /**
   * Autentica una compañía y retorna un JWT
   * @param payload Credenciales de login (email y password)
   * @returns Información de la compañía y tokens JWT
   * @throws UnauthorizedException si las credenciales son inválidas
   * @throws NotFoundException si la compañía no existe
   */
  execute(payload: CompanyLoginRequestDto): Promise<CompanyLoginResponseDto>;
}
