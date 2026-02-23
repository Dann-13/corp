import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { CompanyRegisterRequestDto } from '../../../../../application/ports/in/dtos';
import {
  COMPANY_REGISTER_USE_CASE_PORT,
  type CompanyRegisterUseCasePort,
} from '../../../../../application/ports/in/use-cases';
import { CompanyResponseDto } from '../../../../../application/ports/out/dtos';

@Controller('companies')
export class CompanyRegisterController {
  constructor(
    @Inject(COMPANY_REGISTER_USE_CASE_PORT)
    private readonly useCase: CompanyRegisterUseCasePort,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
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
