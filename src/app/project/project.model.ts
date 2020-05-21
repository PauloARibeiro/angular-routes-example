// MODEL

export class Task {
  id: string;
  name: string;
}

export class Project {
  id: number;
  name: string;
  createdBy: string;
  created: Date;
  tasks: Task[];
}

// MOCK UP DATA
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Online Mobile Recharge Portal Project',
    createdBy: 'codewithsrini',
    created: new Date('4/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
      {
        id: '0',
        name: 'Task 2',
      },
    ],
  },
  {
    id: 2,
    name: 'Vehicle Tracking Using Driver Mobile Gps Tracking',
    createdBy: 'codewithsrini',
    created: new Date('5/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
      {
        id: '0',
        name: 'Task 2',
      },
      {
        id: '0',
        name: 'Task 3',
      },
      {
        id: '0',
        name: 'Task 4',
      },
    ],
  },
  {
    id: 3,
    name: 'Fingerprint Based ATM System',
    createdBy: 'codewithsrini',
    created: new Date('6/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
      {
        id: '0',
        name: 'Task 2',
      },
      {
        id: '0',
        name: 'Task 3',
      },
    ],
  },
  {
    id: 4,
    name: 'Image Encryption Using AES Algorithm',
    createdBy: 'codewithsrini',
    created: new Date('7/11/2018'),
    tasks: [],
  },
  {
    id: 5,
    name: 'Android Based Universal Ticketing Project',
    createdBy: 'codewithsrini',
    created: new Date('8/11/2018'),
    tasks: [],
  },
  {
    id: 6,
    name: 'Android Local Train Ticketing Project',
    createdBy: 'codewithsrini',
    created: new Date('9/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
    ],
  },
  {
    id: 7,
    name: 'College Enquiry Chat Bot',
    createdBy: 'codewithsrini',
    created: new Date('10/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
      {
        id: '0',
        name: 'Task 2',
      },
      {
        id: '0',
        name: 'Task 3',
      },
    ],
  },
  {
    id: 8,
    name: 'Advanced Reliable Real Estate Portal',
    createdBy: 'codewithsrini',
    created: new Date('11/11/2018'),
    tasks: [
      {
        id: '0',
        name: 'Task 1',
      },
      {
        id: '0',
        name: 'Task 2',
      },
    ],
  },
];
