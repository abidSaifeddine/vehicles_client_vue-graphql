<template>
    <div class="container mt-3 align-items-center">
        <h1>Vehicles <router-link to="/form" class="btn btn-success">+</router-link></h1>

        <ApolloQuery
        :query="query"
        >
            <template
            v-slot="{result: {loading, error, data}}"
            >
                <div v-if="loading">Loading...</div>
                <div v-else-if="error" class="text-danger">Error</div>

                <div v-else-if="data" class="row">

                    <div v-for="vehicle in data.vehicles" :key="vehicle.id" class="col-md-4">

                        <VehicleComponent :item="vehicle"/>
                    </div>
                </div>

            </template>
        </ApolloQuery>

        </div>

</template>

<script>
    import VehicleComponent from "../components/VehicleComponent";
    import gql from 'graphql-tag';
    export default {
        name: "HomePage",
        components: {VehicleComponent},
        data() {
            return {
                query: gql`
                     query{
                  vehicles{
                    id
                    type
                    modelCode
                    brandName
                    launchDate
                  }
                }
                `
            }
        }
    }
</script>

<style scoped>
    .modal {z-index: 1090;}
</style>
