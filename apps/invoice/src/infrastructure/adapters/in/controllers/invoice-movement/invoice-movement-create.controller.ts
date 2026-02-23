import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InvoiceMovementCreateRequestDto } from '../../../../../application/ports/in/dtos';
import {
  INVOICE_MOVEMENT_CREATE_USE_CASE_PORT,
  type InvoiceMovementCreateUseCasePort,
} from '../../../../../application/ports/in/use-cases/invoice-movement-create.use-case.port';
import { InvoiceMovementResponseDto } from '../../../../../application/ports/out/dtos';

@ApiTags('Invoice Movements')
@Controller('invoices/movements')
export class InvoiceMovementCreateController {
  constructor(
    @Inject(INVOICE_MOVEMENT_CREATE_USE_CASE_PORT)
    private readonly useCase: InvoiceMovementCreateUseCasePort,
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new invoice movement',
    description: 'Creates a line item for an invoice',
  })
  @ApiResponse({
    status: 201,
    description: 'Invoice movement successfully created',
    type: InvoiceMovementResponseDto,
  })
  async handle(
    @Body() payload: InvoiceMovementCreateRequestDto,
  ): Promise<{ success: true; data: InvoiceMovementResponseDto }> {
    const result = await this.useCase.execute(payload);

    return {
      success: true,
      data: result,
    };
  }
}
