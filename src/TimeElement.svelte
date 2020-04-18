<script>
    export let id;
    export let hours;
    export let minutes;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

	function changeTime() {
		dispatch('time_changed', {
            id: id,
            minutes: minutes,
            hours: hours
		});
	}
</script>

<div>
    <input id="hours_{id}" 
        type="number" min=0 max=59
        bind:value={hours}
        placeholder="Hours"
        on:change={changeTime}
    />
    <input id="minutes_{id}"
        type="number" min=0 max=59
        bind:value={minutes}
        placeholder="Minutes"
        on:change={changeTime}
    />    
</div>
