import {Model} from '@nozbe/watermelondb';
import {date, field, text, writer} from '@nozbe/watermelondb/decorators';

export default class Task extends Model {
  static table = 'tasks';

  @text('name') name;
  @field('is_completed') isCompleted;
  @date('date') date;

  @writer async markAsCompleted() {
    await this.update(task => {
      task.isCompleted = true;
    });
  }

  @writer async newTask(name, isCompleted, date) {
    const newTask = await this.collections.get('tasks').create(task => {
      task.name.set(name);
      task.is_completed.set(isCompleted);
      task.date.set(date);
    });
    return newTask;
  }
}
