export interface IUserState {
  name: string;
  gender: string;
  detailTask: {
    category: string;
    timeStart: string;
    timeEnd: string;
    tasks: {
      name: string;
      items: {
        name: string;
        isDone: boolean;
      }[];
    }[];
  };
  taskList: {
    date: string;
    itemsMorning: {
      category: string;
      timeStart: string;
      timeEnd: string;
      tasks: {
        name: string;
        items: {
          name: string;
          isDone: boolean;
        }[];
      }[];
    };
    itemsAfternoon: {
      category: string;
      timeStart: string;
      timeEnd: string;
      tasks: {
        name: string;
        items: {
          name: string;
          isDone: boolean;
        }[];
      }[];
    };
  }[];
}
