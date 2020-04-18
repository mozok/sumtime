<script>
    import { timeSlots } from './stores.js';
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
    <div class="column">
        <span class="title">Days</span>
        <div class="digit">{days}</div>
    </div>
    <div class="column">
        <span class="title">Hours</span>
        <div class="digit">{hours}</div>
    </div>
    <div class="column">
        <span class="title">Minutes</span>
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
    }

    .container .column .title {
        font-size: 2vw;
    }

    .container .column .digit {
        font-size: 10vw;
    }
</style>
