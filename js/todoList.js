var vm = new Vue({
	el: '#app',
	data: {
		newTodo: null,
		todoList: []
	},
	components: {
		'todo-item': {
			props: ['content', 'index'],
			template: '<li @click="handleItemClick">{{ content }}</li>',
			methods: {
				handleItemClick: function() {
					this.$emit('delete', this.index);
				}
			}
		}
	},
	methods: {
		addNewTodo: function() {
			this.todoList.push(this.newTodo);
			this.newTodo = null;
		},
		deleteItem: function(index) {
			this.todoList.splice(index, 1);
		}
	}
});