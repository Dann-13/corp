import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InvoiceCreateRequestDto } from '../../../../../application/ports/in/dtos';
import {
  INVOICE_CREATE_USE_CASE_PORT,
  type InvoiceCreateUseCasePort,
} from '../../../../../application/ports/in/use-cases';
import { InvoiceResponseDto } from '../../../../../application/ports/out/dtos';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceCreateController {
  constructor(
    @Inject(INVOICE_CREATE_USE_CASE_PORT)
    private readonly useCase: InvoiceCreateUseCasePort,
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new invoice',
    description: 'Creates a new invoice with auto-generated UUID',
  })
  @ApiResponse({
    status: 201,
    description: 'Invoice successfully created',
    type: InvoiceResponseDto,
  })
  async handle(
    @Body() payload: InvoiceCreateRequestDto,
  ): Promise<{ success: true; data: InvoiceResponseDto }> {
    const result = await this.useCase.execute(payload);

    return {
      success: true,
      data: result,
    };
  }
}
