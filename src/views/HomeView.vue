<template>
  <h2 v-if="carregando">Carregando</h2>
  <div v-else class="container">
    <div class="columns">
      <div  v-for="personagem in result.characters.results" :key="personagem.id" class="card col-3">
        <div class="card-image">
          <img :src="personagem.image" class="img-responsive radius">
        </div>
        <div class="card-body">
          <div class="card-title h5">{{ personagem.name }}</div>
        </div>
        <router-link class="btn btn-primary" :to="{name: 'personagem', params:{id: personagem.id}}">Ver perfil</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default {
  setup() {
    const { result, carregando, erro } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      carregando,
      erro,
    };
  },
};
</script>



<style>
.card{
padding:20px;
margin-top: 10px;
}
</style>
