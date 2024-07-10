export interface Task {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
  [ key: string ]: any;
}

export interface TableColumn {
  key: string;
  label: string;
}