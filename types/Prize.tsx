import { Organization } from "./Organization";

export interface Prize {
  id: number;
  premationDate: Date 
  name: string;
  description: string;
  organization: Organization;
}