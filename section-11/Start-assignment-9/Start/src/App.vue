<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form action="" v-if="!formSubmitted">
                        <div class="form-group">
                            <!-- <label for="firstName">First Name</label>
                            <input type="text" id="firstName" class="form-control" v-model="user.firstName">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" class="form-control" v-model="user.lastName"> -->
                            <app-full-name v-model="user.fullName"></app-full-name>
                        </div>
                        <div class="form-group">
                            <label for="userEmail">Mail</label>
                            <input type="text" id="userEmail" class="form-control" v-model="user.userEmail">
                        </div>
                        <div class="form-group">
                            <label for="userPassword">Password</label>
                            <input type="password" id="userPassword" class="form-control" v-model="user.userPassword">
                        </div>
                        <div class="form-group">
                            <label for="storeData">Store Data</label><br>
                            <input type="radio" id="storeDataYes" name="storeData" value="Yes" v-model="user.storeData"> Yes
                            <input type="radio" id="storeDataNo" name="storeData" value="No" v-model="user.storeData"> No
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" @click.prevent="submitForm()">Submit</button>
                        </div>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default" v-if="formSubmitted">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fullName }} </p>
                        <p>Mail: {{ user.userEmail }} </p>
                        <p>Password: {{ user.userPassword }} </p>
                        <p>Store in Database?: {{user.storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue'

    export default {
        data () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    fullName: '',
                    userEmail: '',
                    userPassword: '',
                    storeData: null
                },
                formSubmitted: false
            }
        },
        methods: {
            submitForm () {
                this.formSubmitted = true
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
