<script>
    import { timeSlots } from './stores.js';
    let days = 0,
        hours = 0,
        minutes = 0;

    const unsubscribe = timeSlots.subscribe(value => {
        let newDays = 0,
            newHours = 0,
            newMinutes = 0;

        value.forEach(timeSlot => {
            newHours += parseInt(timeSlot.hours) ? parseInt(timeSlot.hours) : 0;
            newMinutes += parseInt(timeSlot.minutes) ? parseInt(timeSlot.minutes) : 0;
        });
        
        if (newMinutes >= 60) {
            let additionalHours = Math.floor(newMinutes/60); 
            newHours += additionalHours;
            newMinutes -= additionalHours * 60;
        }

        if (newHours >= 24) {
            let additionalDays = Math.floor(newHours/24);
            newDays += additionalDays;
            newHours -= additionalDays * 24;
        }

        days = newDays;
        hours = newHours;
        minutes = newMinutes;
	});
</script>

<div id="days">
    <span>Days</span>
    <p>{days}</p>
</div>
<div id="hours">
    <span>Hours</span>
    <p>{hours}</p>
</div>
<div id="minutes">
    <span>Minutes</span>
    <p>{minutes}</p>
</div>