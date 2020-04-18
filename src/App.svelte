<script>
	import TimeElement from './TimeElement.svelte';
	import TimeTotal from './TimeTotal.svelte';
	import { timeSlots } from './stores.js';

	/** 
	 * Process TimeElement input changes
	*/
	function handleTimeChanged(event) {
		let tempTimeSlots = [...$timeSlots];
		let index = tempTimeSlots.findIndex(e => e.id === event.detail.id);
		tempTimeSlots[index].minutes = event.detail.minutes;
		tempTimeSlots[index].hours = event.detail.hours;

		timeSlots.updateSlots(tempTimeSlots);
	}
</script>

<main>
	<TimeTotal />

	{#each $timeSlots as timeSlot}	
		<TimeElement {...timeSlot} on:time_changed={handleTimeChanged}/>
	{/each}

	<div>
		<button on:click={timeSlots.deleteSlot}>-</button>
		<button on:click={timeSlots.addSlot}>+</button>
		<button on:click={timeSlots.resetSlots}>Reset</button>
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
