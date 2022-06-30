import {database} from './database';

export type Task = {
  name: string;
  isCompleted: boolean;
  date: number;
};

const tasks = database.collections.get('tasks');

export const observeTasks = () => tasks.query().observe();
export const newTask = async ({date, isCompleted, name}: Task) =>
  await database.write(async () => {
    const post = await database.get('tasks').create(el => {
      el.name = name;
      el.is_completed = isCompleted;
      el.date = date;
    });
    // Note: Value returned from the wrapped function will be returned to `database.write` caller
    return post;
  });
