<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="currentComponent='app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="currentComponent='app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="currentComponent='app-red'">Load Red Template</button>
                <hr>

                <component :is="currentComponent">
                    <p v-if="currentComponent=='app-blue'">This is blue text</p>
                    <p v-if="currentComponent=='app-green'">This is green text</p>
                    <p v-if="currentComponent=='app-red'">This is red text</p>
                </component>

                <!-- <app-blue>
                    <p>This is blue text</p>
                </app-blue>
                <app-green>
                    <p>This is green text</p>
                </app-green>
                <app-red>
                    <p>This is red text</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data () {
            return {
                currentComponent: 'app-blue'
            }
        }
    }
</script>

<style>
</style>
