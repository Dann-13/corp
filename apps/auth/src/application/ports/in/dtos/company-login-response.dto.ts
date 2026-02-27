import { ApiProperty } from '@nestjs/swagger';
import { CompanyResponseDto } from '../../out/dtos';

export class CompanyLoginResponseDto {
  @ApiProperty({
    description: 'Company information',
    type: CompanyResponseDto,
  })
  company: CompanyResponseDto;

  @ApiProperty({
    description: 'JWT access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NTBlODQwMC1lMjliLTQxZDQtYTcxNi00NDY2NTU0NDAwMDAiLCJlbWFpbCI6ImNvbnRhY3RAYWNtZS5jb20iLCJpYXQiOjE2NDA5OTUyMDAsImV4cCI6MTY0MTAwMjQwMH0.abcdefghijklmnopqrstuvwxyz',
  })
  accessToken: string;

  @ApiProperty({
    description: 'JWT refresh token (for token renewal)',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NTBlODQwMC1lMjliLTQxZDQtYTcxNi00NDY2NTU0NDAwMDAiLCJ0eXBlIjoicmVmcmVzaCIsImlhdCI6MTY0MDk5NTIwMCwiZXhwIjoxNjQzNTg3MjAwfQ.zyxwvutsrqponmlkjihgfedcba',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'Token expiration time in seconds',
    example: 7200,
  })
  expiresIn: number;
}
