<script lang="ts">
	import { deleteTask, toggleComplete } from '../../store/task';

	export let task: import('../../store/task').Task;

	$: completeClass = task.isComplete ? 'checked' : '';
	$: completeClassSpan = task.isComplete ? 'contenteditable' : '';
</script>

<li id={`${task.id}`}>
	<div class="checkbox-wrapper">
		<input
			type="checkbox"
			id="${task.name}-${task.id}"
			name="tasks"
			checked={task.isComplete}
			class={completeClass}
			on:change={() => toggleComplete(task.id)}
		/>
		<label for="${task.name}-${task.id}">
			<svg class="checkbox-empty">
				<use xlink:href="#checkbox_empty" />
			</svg>
			<svg class="checkmark">
				<use xlink:href="#checkmark" />
			</svg>
		</label>
		<span class={completeClassSpan}>{task.name}</span>
	</div>
	<button on:click={() => deleteTask(task.id)} class="remove-task" title="Remove ${task.name} task">
		<svg>
			<use xlink:href="#close" />
		</svg>
	</button>
</li>
