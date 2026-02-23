import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyRegisterRequestDto } from '../../../../../application/ports/in/dtos';
import {
  COMPANY_REGISTER_USE_CASE_PORT,
  type CompanyRegisterUseCasePort,
} from '../../../../../application/ports/in/use-cases';
import { CompanyResponseDto } from '../../../../../application/ports/out/dtos';

@ApiTags('Companies')
@Controller('companies')
export class CompanyRegisterController {
  constructor(
    @Inject(COMPANY_REGISTER_USE_CASE_PORT)
    private readonly useCase: CompanyRegisterUseCasePort,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Register a new company',
    description:
      'Creates a new company with hashed password and auto-generated UUID',
  })
  @ApiResponse({
    status: 201,
    description: 'Company successfully registered',
    type: CompanyResponseDto,
  })
  @ApiResponse({
    status: 409,
    description: 'Email already registered',
  })
  async handle(
    @Body() payload: CompanyRegisterRequestDto,
  ): Promise<{ success: true; data: CompanyResponseDto }> {
    const result = await this.useCase.execute(payload);

    return {
      success: true,
      data: result,
    };
  }
}
