import type { Environment } from '../types/environment.type';

export interface DatabaseModuleOptions {
  appName: string;
  envVarName?: string;
  defaultUris?: Partial<Record<Environment, string>>;
}
