var demo = new Vue ({

	el: '#main',

	data: {
		toDoItem: '',
		toDoList: []
	},

	methods: {

		addTask: function() {

			var name = this.toDoItem.trim();

			if (name) {
				this.toDoList.push({
				title: name,
				completed: false		
				})
				this.toDoItem = '';
			}
		},

		deleteTask: function() {
			var index = this.toDoList.indexOf(toDoItem);
      		this.toDoList.splice(index, 1);
		},

		completeTask: function() {
			this.toDoList
				completed: true

		}

		// editTask: function() {

		// 	// NTH Ability to click into to do item and edit the name of it.

		// }

		// showHideComplete: function() {

		// 	// NTH Shows or hides the completed section and the to do's that are in it.

		// }
	}

});

// alert("hello!");