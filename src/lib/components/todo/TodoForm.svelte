<script>
</script>

<form class="todo-form">
	<div class="form-wrapper">
		<input type="text" name="name" />

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

<style>
	.todo-form .form-wrapper {
		position: relative;
	}

	.todo-form input,
	.todo-form button {
		position: relative;
		width: 100%;
		z-index: 1;
		padding: 15px;
	}

	.todo-form svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.todo-form button {
		color: var(--white);
		text-transform: uppercase;
	}

	@media screen and (min-width: 600px) {
		.todo-form {
			display: grid;
			grid-template-columns: 2fr 1fr;
			grid-column-gap: 5px;
		}
	}
</style>
