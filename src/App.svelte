<script>
	import TimeElement from './TimeElement.svelte';

	let timeSlots = [
		{minutes: 0, hours: 0}
	];

	/*
	* Delete last time slot element handler
	*/
	function handleDelete() {
		timeSlots.pop();
		timeSlots = timeSlots;
	}

	/*
	* Add one more time slot handler
	*/
	function handleAdd() {
		timeSlots.push({minutes: 0, hours: 0});
		timeSlots = timeSlots;
	}
</script>

<main>
	{#each timeSlots as timeSlot}
		<TimeElement {...timeSlot}/>
	{/each}

	<div>
		<button on:click={handleDelete}>-</button>
		<button on:click={handleAdd}>+</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
