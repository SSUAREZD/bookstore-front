import { Organization } from "./Organization";
import { Prize } from "./Prize";

export interface OrganizationDetail extends Organization{
    
    prize: Prize
}