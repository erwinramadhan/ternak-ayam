import {ITheme} from './theme';

export type ICard = {
  fonts: ITheme['fonts'];
  colors: ITheme['colors'];
  category: 'morning' | 'afternoon';
  type: 'category' | 'task';
  taskData?: {
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
  onClick: (data: any) => void;
};

export type ICardCategory = {
  fonts: ITheme['fonts'];
  colors: ITheme['colors'];
  category: 'morning' | 'afternoon';
  onClick: (data: any) => void;
  data?: {
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
};

export type ICardTask = {
  fonts: ITheme['fonts'];
  colors: ITheme['colors'];
  category: 'morning' | 'afternoon';
  data?: {
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
  onClick: (data: any) => void;
};
