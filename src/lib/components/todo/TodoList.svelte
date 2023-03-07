<script>
	import { tasks } from '../../store/task';
	import TodoItem from './TodoItem.svelte';
</script>

<ol class="todo-list">
	{#each $tasks as task (task.id)}
		<TodoItem {task} />
	{/each}
</ol>
