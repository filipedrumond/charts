var app = new Vue({
  el: "#apkkp",
  data: {
    message: "Hello Vue!",
    items: []
  },
  methods: {
    adicionar_item: item => {
      this.items.push(item);
    },
    remover_item: indice => {
      this.items.slice(indice);
    }
  }
});
