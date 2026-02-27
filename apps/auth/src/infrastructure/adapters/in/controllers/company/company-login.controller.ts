import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CompanyLoginRequestDto,
  CompanyLoginResponseDto,
} from '../../../../../application/ports/in/dtos';
import {
  COMPANY_LOGIN_USE_CASE_PORT,
  type CompanyLoginUseCasePort,
} from '../../../../../application/ports/in/use-cases';

@ApiTags('Companies')
@Controller('companies')
export class CompanyLoginController {
  constructor(
    @Inject(COMPANY_LOGIN_USE_CASE_PORT)
    private readonly useCase: CompanyLoginUseCasePort,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login company',
    description:
      'Authenticates a company and returns JWT tokens (access + refresh)',
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: CompanyLoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials or inactive account',
  })
  @ApiResponse({
    status: 404,
    description: 'Company not found',
  })
  async handle(
    @Body() payload: CompanyLoginRequestDto,
  ): Promise<{ success: true; data: CompanyLoginResponseDto }> {
    const result = await this.useCase.execute(payload);

    return {
      success: true,
      data: result,
    };
  }
}
