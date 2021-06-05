export type TTask = {
  id: string;
  task: string;
};

export type TTaskId = {
  id: string;
};

export type TTextTask = {
  task: string;
};

export type TCheckAddButton = {
  to: 'add' | 'edit';
  id?: string;
};

export type TCheckDelButton = {
  to: 'del' | 'cancel';
  id?: string;
};
