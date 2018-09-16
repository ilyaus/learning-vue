<template>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <app-server-status />
        </div>
</template>

<script>
export default {
    data: function() {
        return {index: 1};
    }
}
</script>
