<script>
    export let hours;
    export let minutes;
</script>

<div>
    <input id="hours" 
        type="number" min=0 max=60
        value={hours ? hours : ""}
        placeholder="Hours"
    />
    <input id="minutes"
        type="number" min=0 max=60
        value={minutes ? minutes : ""}
        placeholder="Minutes"
    />    
</div>
