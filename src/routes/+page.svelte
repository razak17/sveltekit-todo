<script>
	import TodoForm from '$lib/components/todo/TodoForm.svelte';
	import TodoList from '$lib/components/todo/TodoList.svelte';
	import TodoStats from '$lib/components/todo/TodoStats.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<div class="container">
	<h1>Simple Handmade TODO App With Vanilla JavaScript</h1>
	<TodoForm />
	<TodoStats />
	<TodoList />
</div>

<style>
	.container {
		max-width: 700px;
		padding: 0 10px;
		margin: 0 auto;
	}
</style>
