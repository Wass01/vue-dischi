// Attraverso una chiamata ajax all’API di boolean https:
//flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

Vue.config.devtools = true;

let app = new Vue({
  el: "#root",
  data: {
    dischi: [],
    select: '',
  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.dischi = response.data.response;
    });
  },

  methods: {
  },
});
