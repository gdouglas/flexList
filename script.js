// using jQuery and datatables
// possible datables for vue https://onewaytech.github.io/vue2-datatable/examples/dist/
// https://laracasts.com/discuss/channels/vue/using-datatables-with-vue
var qTable = "";
$(document).ready(function() {
  qTable = $("#list").DataTable({
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    dom: "Bfrtip",
    "order": [[ 0, "desc" ]],
    colReorder: true,
    responsive: true,
    "columns": [
      { "name": "id" },
      { "name": "title" },
      { "name": "status" },
      { "name": "supervisor" },
      { "name": "cycle" },
      { "name": "start" },
      { "name": "end" },
      { "name": "description" },
      { "name": "maxHr" },
      { "name": "estHr" },
      { "name": "maxStu" },
      { "name": "site" },
      { "name": "link" }
    ],
    buttons: [
      {
        text: "Clear Search and sort",
        action: function(e, dt, node, config) {
          alert("Reset table");
        }
      },
      {
        extend: "colvis",
        text: "Choose Columns",
        columnText: function(dt, idx, title) {
          return '<span class="inc">' + (idx + 1) + "</span>" + title;
        },
        fade: 100
      },
      {
        extend: "collection",
        text: "Site",
        buttons: [
          {
            text: "VFMP",
            action: function() {
              alert("filter on site");
            }
          },
          {
            text: "NMP",
            action: function() {
              alert("filter on site");
            }
          },
          {
            text: "SMP",
            action: function() {
              alert("filter on site");
            }
          },
          {
            text: "IMP",
            action: function() {
              alert("filter on site");
            }
          }
        ],
        fade: 100
      },
      {
        extend: "collection",
        text: "Cycle",
        buttons: [
          {
            text: "1",
            action: function() {
              alert("filter on Cycle");
            }
          },
          {
            text: "2",
            action: function() {
              alert("filter on Cycle");
            }
          },
          {
            text: "3",
            action: function() {
              alert("filter on Cycle");
            }
          },
          {
            text: "Check/Uncheck all",
            action: function() {
              alert("filter on Cycle");
            }
          }
        ],
        fade: 100
      }
    ],
    "initComplete": function(){
      sortClick(this); 
      addControls();
    }
  });
});

var view = "admin";
function addControls(){
  studentControl();
  adminControl();
}

function studentControl(){
  $("#student").on("click", function() {
    view = "student";
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".faculty").remove();
    $(".admin").removeClass("admin");
    $("thead tr").each(function() {
      if($(this).find("td.student").length <1) {
        $(this).prepend("<td class='student'>");
      }
    });
    $("tbody tr").each(function() {
      if($(this).find("td.student").length <1) {
        $(this).prepend("<td class='student'><button>Enroll</button>");
      }
    });
  });
}
function adminControl() {
  $("#admin").on("click", function() { 
    $(".active").removeClass("active");
    $(this).addClass("active");
    view = "admin";
    $(".faculty , .student").remove();
    $("td").each(function() {
      $(this).addClass("admin");
    });  
  });
}



function sortClick(table){
  $("th button").on("click", function(e) {
    //get button and column
    doAction(getAction(e));
    //sort or filter 
    // table.api()
    // .order( [ 0, 'asc' ] )
    // .draw();
    });
}

function getAction(e) {
  var action = "";
  var id = e.target.id;
  if (e.target.classList.contains("sort")) {
    action = "sort";
  } else {
    e.stopPropagation();
    action = "filter";
  }
  return {action:action,id: id, element: e.target};
}
function doAction(obj) {
  var input = "";
  console.log(obj.id);
  switch(obj.id) {
    case "cycleFilter":
      input = '<input id="one"type="checkbox"><label for="one">1</label>'+
              '<input id="two"type="checkbox"><label for="two">2</label>'+
              '<input id="three"type="checkbox"><label for="three">3</label>'+
              '<input id="four"type="checkbox"><label for="four">4</label>'+
              '<input id="five"type="checkbox"><label for="five">5</label>'+
              '<input id="six"type="checkbox"><label for="six">6</label>'+
              '<input id="seven"type="checkbox"><label for="seven">7</label>'+
              '<input id="eight"type="checkbox"><label for="eight">8</label>'+
              '<input id="nine"type="checkbox"><label for="nine">9</label>'+
              '<input id="ten"type="checkbox"><label for="ten">10</label>'+
              '<input id="eleven"type="checkbox"><label for="eleven">11</label>';
      break;
    default:
      input ="<input type='text' placeholder='search id'>";
  }
  var elem = $(obj.element).parent();
  if (elem.find('input').length > 0) {
    elem.find('input').remove();
  } else {
    elem.append(input);
  }
}