<template>
    <div class="card text-white bg-secondary my-3" style="max-width: 20rem;">
        <div class="card-header"><h3>{{ item.modelCode }}</h3>
            <button @click="() => deleteVehicle(item.id)" class="btn btn-danger" style="float: right">X</button>
        </div>
        <div class="card-body">
            <h4 class="card-title">Details</h4>
            <ul class="list-group">
                <li class="list-group-item">
                    Model type: {{ item.type }}
                </li>
                <li class="list-group-item">
                    Brand name: {{ item.brandName }}
                </li>
                <li class="list-group-item">
                    Launch date: {{ item.launchDate }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    const deleteQuery = gql`mutation deleteVehicle($id: ID){
        deleteVehicle(id: $id){
            id
        }
    }`;

    export default {
        name: "VehicleComponent",
        props: ['item'],
        methods: {
            deleteVehicle(id) {
                this.$apollo.mutate({
                        mutation: deleteQuery,
                        variables: {id: id},
                    update:(store) => {
                        if(store)
                            location.reload();

                    }
                    }
                );

            }
        }
    }
</script>

<style scoped>

</style>
