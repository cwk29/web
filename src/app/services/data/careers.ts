import { CLEARANCE } from './clearance';
import { POLY } from './poly';
import { Location } from '../../models/Location';

export const CAREERS = [
  {
    id: 1,
    clearanceLevel: CLEARANCE['TS_SCI'],
    polyLevel: POLY['FSP'],
    category: 'Software Engineering',
    location: 'Columbia, MD',
    title: 'Software Engineer',
    description: 'Some description about the job',
    capabilities: [
      'Analyze user requirements to derive software design and performance requirements',
      'Design and code new software or modify existing software to add new features',
    ],
    experience: [
      'Strong written and verbal communication skills and teamwork skills',
      'Bachelor’s degree or equivalent experience',
      '7+ years of overall experience',
    ],
    certifications: [],
  },
  {
    id: 2,
    clearanceLevel: CLEARANCE['TS'],
    polyLevel: POLY['CI'],
    category: 'Systems Administrator',
    location: 'Charlotte, NC',
    title: 'Linux Systems Administrator',
    description: 'Some description about the job',
    capabilities: [
      'Analyze user requirements to derive software design and performance requirements',
      'Design and code new software or modify existing software to add new features',
    ],
    experience: [
      'Strong written and verbal communication skills and teamwork skills',
      'Bachelor’s degree or equivalent experience',
      '7+ years of overall experience',
    ],
    certifications: [],
  },
  {
    id: 3,
    clearanceLevel: CLEARANCE['N'],
    polyLevel: POLY['N'],
    category: 'Systems Engineering',
    location: 'Remote',
    title: 'C++ Developer',
    description: 'Some description about the job',
    capabilities: [
      'C++ development experience',
      'XML/XSD experience',
      'Scripting language experience such as Python or Perl',
    ],
    experience: [
      'Strong written and verbal communication skills and teamwork skills',
      'Bachelor’s degree or equivalent experience',
      '2+ years of overall experience',
    ],
    certifications: [],
  },
];
