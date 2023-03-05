<template>
    <div class="container">
        <div class="columns">
            <div class="column col-4">
                <img class="radius img-responsive" :src="result.character.image">
            </div>
            <div class="column col-8">
                <h2>{{ result.character.name }}</h2>
                {{ getId }}
            </div>
        </div>
    </div>
</template>


<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const personagensQuery = gql`
query {
  character(id: 1) {
    id
    name
    image
    gender
    status
    created
    species
  	episode {
  	  id
  	}
  }
}
`;

export default {
    data() {
        return {
            getId: this.$route.params.id,   
        }
    },
    setup() {
        const { result } = useQuery(personagensQuery);
        return {
            result,
        };
    },
};
</script>