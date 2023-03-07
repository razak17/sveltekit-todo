<script lang="ts">
	import { addTask } from '../../store/task';

	let newTaskName = '';

	function addNewTask() {
		addTask(newTaskName);
		newTaskName = '';
	}
</script>

<form on:submit|preventDefault={addNewTask} class="todo-form">
	<div class="form-wrapper">
		<input required name="name" type="text" bind:value={newTaskName} />

		<svg>
			<use xlink:href="#input" />
		</svg>
	</div>

	<div class="form-wrapper">
		<button type="submit">Add new task</button>

		<svg>
			<use xlink:href="#button" />
		</svg>
	</div>
</form>
