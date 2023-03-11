<script lang="ts">
	import { tasks } from '../../store/task';

	$: totalCount = $tasks.length;
	$: completeCount = $tasks.filter((task) => task.isComplete).length;
	$: progressCount = $tasks.filter((task) => !task.isComplete).length;
</script>

<div class="todo-stats">
	<div class="total-tasks">
		Total Tasks: <span>{totalCount}</span>
	</div>
	<div class="completed-tasks">
		Completed Tasks: <span>{completeCount}</span>
	</div>
	<div class="remaining-tasks">
		Remaining Tasks: <span>{progressCount}</span>
	</div>
	<svg>
		<use xlink:href="#stats" />
	</svg>
</div>
