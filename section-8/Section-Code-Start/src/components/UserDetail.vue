<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset with callback</button>

    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            name: {
                type: String,
                default: 'Max'
            },
            userAge: Number,
            resetFn: Function
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("")
            },
            resetName() {
                this.name = "Max";
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
