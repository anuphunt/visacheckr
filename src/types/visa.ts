export type VisaRequirement = string | number;

export interface VisaEntry {
  Passport: string;
  [country: string]: VisaRequirement;
}

export interface VisaInfo {
  status: string;
  description: string | number;
  color: string;
}

export type VisaType = 
  | 'visa free'
  | 'visa on arrival'
  | 'e-visa'
  | 'visa required'
  | 'no admission';