import { ApiProperty } from '@nestjs/swagger';

export class CompanyRegisterRequestDto {
  @ApiProperty({
    description: 'Company name',
    example: 'Acme Corporation',
  })
  name: string;

  @ApiProperty({
    description: 'Company email address',
    example: 'contact@acme.com',
  })
  email: string;

  @ApiProperty({
    description: 'Company password (will be hashed)',
    example: 'SecureP@ssw0rd',
  })
  password: string;

  @ApiProperty({
    description: 'Company physical address',
    example: '123 Main St, New York, NY 10001',
  })
  address: string;
}
