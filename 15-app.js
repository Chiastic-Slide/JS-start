'use strict';

const toDoList = {
	tasks: [
    { title: 'Помыть посуду',
      id: 1,
      priority: 1 }
    ],
	add: function (title, priority) {
    const newId = this.tasks.length > 0 
    ? Math.max(...this.tasks.map(task => task.id)) + 1: 1;
		this.tasks.push({
      title,
      id: newId,
      priority });
      console.log(this.tasks);
    return this;
	},
  remove: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(this.tasks);
    return this;
  },
  update: function (id, newData) {
    const task = this.tasks.find(task => task.id === id);
      if (task) {
    if (newData.title !== undefined) {
      task.title = newData.title;
    };
    if (newData.priority !== undefined) {
      task.priority = newData.priority;
    };
  };
    console.log(this.tasks);
    return this;
  },
  sort: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
    return this;
  }
};

toDoList.add('Полить цветы', 2);
toDoList.remove(1);
toDoList.add('Сходить в магазин', 3);
toDoList.update(3, { title: 'Погулять с собакой', priority: 1 });
toDoList.sort();
console.log(toDoList.tasks);