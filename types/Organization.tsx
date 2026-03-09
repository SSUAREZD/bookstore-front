export enum OrganizationType {
  PRIVADA = "PRIVADA",
  PUBLICA = "PUBLICA",
  FUNDACION = "FUNDACION"
}

export interface Organization {
  id: number
  name: string
  description: string
  type: OrganizationType
}