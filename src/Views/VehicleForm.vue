<template>
    <form class="container my-5">
        <fieldset>
            <div class="form-group">
                <label for="type">Type</label>
                <input type="text"
                       class="form-control"
                       id="type"
                       placeholder="Vehicle type"
                        v-model="type"
                >

            </div>
            <div class="form-group">
                <label for="brand">Brand name</label>
                <input type="text"
                       class="form-control"
                       id="brand"
                       placeholder="Vehicle brand"
                        v-model="brand"
                >
            </div>
            <div class="form-group">
                <label for="code">Model code</label>
                <input type="text"
                       class="form-control"
                       id="code"
                       placeholder="Model code"
                        v-model="code"
                >
            </div>
            <div class="form-group">
                <label for="date">Launch date</label>
                <input type="date"
                       class="form-control"
                       id="date"
                       v-model="date"
                       >
            </div>
            <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
</template>

<script>
    import gql from 'graphql-tag';
    const createVehicle = gql`
        mutation createVehicle($type: String!, $modelCode: String!, $brandName: String, $launchDate: String){
            createVehicle(type: $type, modelCode: $modelCode, brandName: $brandName, launchDate: $launchDate){
                type
                modelCode
                brandName
                launchDate
            }
        }
    `;
    export default {
        name: "AddVehiclePage",
        data(){
            return{
                type: '',
                brand: '',
                code: '',
                date: ''

            }
        },
        methods: {
            submit(e){
                e.preventDefault();
                this.$apollo.mutate({
                    mutation: createVehicle,
                    variables: {
                        type: this.type,
                        modelCode: this.code,
                        brandName: this.brand,
                        launchDate: this.date

                    },
                    update: () => {
                        return this.$router.go(-1);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
