import {
  Inject,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  CompanyLoginRequestDto,
  CompanyLoginResponseDto,
} from '../../ports/in/dtos';
import {
  COMPANY_REPOSITORY_PORT,
  type CompanyRepositoryPort,
} from '../../ports/out/repositories/company/company.repository.port';
import { type CompanyLoginUseCasePort } from '../../ports/in/use-cases';
import type { CompanyWithPasswordDto } from '../../ports/out/dtos/company-with-password.dto';

/**
 * Caso de uso: Login de Compañía
 * Autentica una compañía y genera tokens JWT
 */
@Injectable()
export class CompanyLoginUseCase implements CompanyLoginUseCasePort {
  constructor(
    @Inject(COMPANY_REPOSITORY_PORT)
    private readonly repository: CompanyRepositoryPort,
    private readonly jwtService: JwtService,
  ) {}

  async execute(
    payload: CompanyLoginRequestDto,
  ): Promise<CompanyLoginResponseDto> {
    // 1. Buscar compañía por email (con password para validación)

    const company = await this.repository.findByEmailWithPassword(
      payload.email,
    );

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    // 2. Verificar password con bcrypt
    const isPasswordValid = await bcrypt.compare(
      payload.password,
      company.hashedPassword,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 3. Verificar si la compañía está activa
    if (!company.isActive) {
      throw new UnauthorizedException('Company account is inactive');
    }

    // 4. Generar JWT tokens
    const jwtPayload = {
      sub: company.uuid,
      email: company.email,
      name: company.name,
    };

    const accessToken = this.jwtService.sign(jwtPayload, {
      expiresIn: '2h', // Access token válido por 2 horas
    });

    const refreshToken = this.jwtService.sign(
      { ...jwtPayload, type: 'refresh' },
      {
        expiresIn: '30d', // Refresh token válido por 30 días
      },
    );

    // 5. Retornar respuesta (sin el hashedPassword)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hashedPassword, ...companyData } = company;

    return {
      company: companyData,
      accessToken,
      refreshToken,
      expiresIn: 7200, // 2 horas en segundos
    };
  }
}
