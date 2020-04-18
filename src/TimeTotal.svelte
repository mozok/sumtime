<script>
    import { timeSlots } from './stores.js';
    import { fade } from 'svelte/transition';

    let days = 0,
        hours = 0,
        minutes = 0;

    /** 
     * Chane total time on TimeSlots update
    */
    const unsubscribe = timeSlots.subscribe(value => {
        let newDays = 0,
            newHours = 0,
            newMinutes = 0;

        value.forEach(timeSlot => {
            newHours += parseInt(timeSlot.hours) ? parseInt(timeSlot.hours) : 0;
            newMinutes += parseInt(timeSlot.minutes) ? parseInt(timeSlot.minutes) : 0;
        });

        if (newMinutes >= 60) {
            let additionalHours = Math.floor(newMinutes / 60);
            newHours += additionalHours;
            newMinutes -= additionalHours * 60;
        }

        if (newHours >= 24) {
            let additionalDays = Math.floor(newHours / 24);
            newDays += additionalDays;
            newHours -= additionalDays * 24;
        }

        days = newDays;
        hours = newHours;
        minutes = newMinutes;
    });
</script>

<div class="container">
    {#if days}
        <div transition:fade class="column">
            <div class="title">Days</div>
            <div class="digit">{days}</div>
        </div>
    {/if}
    <div class="column">
        <div class="title">Hours</div>
        <div class="digit">{hours}</div>
    </div>
    <div class="column">
        <div class="title">Minutes</div>
        <div class="digit">{minutes}</div>
    </div>
</div>


<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .container .column {
        margin: 10px;
        width: 14vw;
        height: 15vw;
        background-color: #fff;
        border-radius: 1vw;
        font-family: Oswald, sans-serif;
        color: #333
    }

    .container .column .title {
        font-size: 2vw;
    }

    .container .column .digit {
        font-size: 10vw;
        position: relative;
        bottom: 20%;
    }
</style>
