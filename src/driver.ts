// Driver.ts

export interface Driver {
    username: string;
    password: string;
    name: string;
    notifications: { title: string; message: string }[];
    performance: number;
  }
  