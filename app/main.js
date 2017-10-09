Vue.component('toDoItem', {

	// Template for componentwill be the HTML that displays (HTML within <li>)
	// These are generic HTML names so they can be applied in multiple places (beyond to do list)

	template: '<li>{{ title }}<button type="button" v-on:click="removeTask(id)" class="remove">X</button></li>',
		// FYI: camelCase caused errors for functions.  Had to change removeTask to remove-task.

	props: ['title', 'id', 'removeTask']

});

var demo = new Vue ({

	el: '#main',

	data: {
		toDoItem: '',
		toDoList: [],
		nextTaskId: 0
	},

	methods: {

		addTask: function() {

			// Easy way
			// this.toDoList.push(this.toDoItem)
			// this.toDoItem = '';

			// More scalable way for new features

			this.toDoList.push({
			id: this.nextTaskId++,
			title: this.toDoItem
			// completed: false
			});
			this.toDoItem = '';
		},

		removeTask: function(id) {
			var index = this.findTask(id);
  		this.toDoList.splice(index, 1);
		},

		findTask: function(id) {
			return this.toDoList.findIndex(function(toDoItem) {
				return id === toDoItem.id;
			});
		}

		// completeTask: function() {
		// 	if (this.toDoList == completed: true) {

		// }

		// },

		// editTask: function() {

		// 	// NTH Ability to click into to do item and edit the name of it.

		// },

		// showHideComplete: function() {

		// 	// NTH Shows or hides the completed section and the to do's that are in it.

		// }
	}

});

// alert("hello!");