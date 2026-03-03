/**
 * Company data con password hasheado incluido
 * ⚠️ SOLO para uso interno en autenticación - NUNCA exponer en API
 */
export interface CompanyWithPasswordDto {
  uuid: string;
  name: string;
  email: string;
  address: string;
  isActive: boolean;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
  hashedPassword: string;
}
