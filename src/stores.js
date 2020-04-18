import { writable } from 'svelte/store';

function createTimeSlots() {
    const { subscribe, set, update } = writable(
        [
            {id: 0, minutes: '', hours: ''}
        ]
    );

    /**
     * Add one more time slot handler
     */
    function addSlot() {
        update(ts => {
            let id = ts.length;
		    ts.push({id: id, minutes: '', hours: ''});
		    return ts;
        });
    }

    /**
     * Delete last time slot element handler
     */
    function deleteSlot() {
        update(ts => {
            ts.pop();
            return ts;
        });
    }

    /**
     * Reset time slots
     */
    function resetSlots() {
        set([{id: 0, minutes: '', hours: ''}])
    }

    /**
     * Update whole time slots
     * 
     * @param {*} slots 
     */
    function updateSlots(slots) {
        set(slots);
    }

    return {
        subscribe,
        addSlot,
        deleteSlot,
        resetSlots,
        updateSlots
    };
}

export const timeSlots = createTimeSlots();
