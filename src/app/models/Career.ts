export interface Career {
  id: string;
  clearanceLevel: string;
  polyLevel: string;
  category: string;
  location: string;
  title: string;
  description: string;
  capabilities: Array<string>;
  experience: Array<string>;
  certifications?: Array<string>;
  link: string;
}
