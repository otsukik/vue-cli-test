<template>
  <div class="about">
    <h2>current team: {{ getTeamName }}</h2>
    <button @click="clickCounter">counter</button>
    <div>{{ $store.state.sum }}</div>
    <div>Last team name clicked: {{ $store.state.lastTeam }}</div>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: ['teamId'],
  data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ]
    };
  },
  computed: {
    getTeamName() {
      return this.teams.filter(team => team.id === this.teamId)[0].name;
    }
  },
  methods: {
    clickCounter: function() {
      this.addSum()
      this.setTeamName(this.getTeamName)
    },
    addSum() {
      this.$store.commit('addSumMutation');
    },
    setTeamName(name) {
      this.$store.commit('setTeamNameMutation', name);
    }
  }
};
</script>