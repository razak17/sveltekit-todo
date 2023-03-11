import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Task = {
	id: string;
	name: string;
	isComplete: boolean;
};

const data: Task[] = browser
	? JSON.parse(window.localStorage.getItem('tasks') as string) ?? []
	: [];

export const tasks = writable(data);

tasks.subscribe((value) => {
	if (browser) {
		localStorage.setItem('tasks', JSON.stringify(value));
	}
});

export const addTask = (name: string) => {
	tasks.update((currentTasks) => {
		const newTask = [...currentTasks, { id: uuidv4(), name, isComplete: false }];
		return newTask;
	});
};

export const deleteTask = (id: string) => {
	tasks.update((currentTasks) => {
		return currentTasks.filter((task) => task.id !== id);
	});
};

export const toggleComplete = (id: string) => {
	tasks.update((currentTasks) => {
		return currentTasks.map((task) => {
			if (task.id === id) {
				return { ...task, isComplete: !task.isComplete };
			}
			return task;
		});
	});
};

export const editTask = (id: string, name: string) => {
	tasks.update((currentTasks) => {
		return currentTasks.map((task) => {
			if (task.id === id) {
				return { ...task, name };
			}
			return task;
		});
	});
};
