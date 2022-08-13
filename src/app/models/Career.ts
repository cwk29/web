import { Location } from './Location';

export interface Career {
  id: number;
  clearanceLevel: string;
  polyLevel: string;
  category: string;
  location: string;
  title: string;
  description: string;
  capabilities: Array<string>;
  experience: Array<string>;
  certifications?: Array<string>;
}
