export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

//implementing enum comma is here.
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
