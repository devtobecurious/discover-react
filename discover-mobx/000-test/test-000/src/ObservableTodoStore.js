import { observable, computed, autorun } from "mobx";

class ObservableTodoStore {
	@observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        //autorun(() => console.log('huhu', this.report));
    }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	@computed get report() {
		console.log('calling report');

		if (this.todos.length === 0)
			return "<none>";
		const nextTodo = this.todos.find(todo => todo.completed === false);
		return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}


const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;