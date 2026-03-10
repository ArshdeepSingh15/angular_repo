export interface User {
  id?: number;
  name: string;
  email?: string;
  age?: number;
  type?: 'NEW' | 'OLD';
  website?: string;
  phone?: string;
}