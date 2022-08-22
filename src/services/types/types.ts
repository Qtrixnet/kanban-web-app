export interface ITask {
  id?: string,
  description?: string,
  title: string,
  subtasks: ISubtask[],
}

export interface ISubtask {
  id: string,
  done: boolean,
  title: string,
}

export interface IColumn {
  color: string,
  id: string,
  title: string,
  tasks: ITask[],
}

export interface IBoard {
  title: string,
  id: string,
  columns: IColumn[],
}
