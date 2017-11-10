new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    tr: [
      { title: "2hi" },
      { title: "1hi" },
      { title: "4hi" },
      { title: "5hi" },
      { title: "3ai" }
    ]
  },
  methods: {
    button: function(e) {
      this.tr.sort(compareVals("title", "desc"));
    }
  }
});

function compareVals(key, order = "asc") {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      //nothing here
      return 0;
    }
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == "desc" ? comparison * -1 : comparison;
  };
}
