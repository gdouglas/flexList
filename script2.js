// using jQuery and datatables
// possible datables for vue https://onewaytech.github.io/vue2-datatable/examples/dist/
// https://laracasts.com/discuss/channels/vue/using-datatables-with-vue
var qTable = "";
$(document).ready(function() {
  qTable = $("#list").DataTable({
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    dom: "Blfrtip",
    sort: false,
    colReorder: true,
    responsive: true,
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
    ]
  });
  sortClick(qTable);
});

var student = false;
$("#student").click(function() {
  $("button.active").removeClass("active");
  $(this).addClass("active");
  if (student) {
    student = !student;
    $(".student, .faculty , .admin").remove();
    $(".active").removeClass("active");
    $("#admin").addClass("active");
  } else {
    student = !student;
    $(".faculty , .admin").remove();
    $("tr").each(function() {
      $(this).prepend("<td class='student'><button>Enroll</button>");
    });
  }
});
// var table2 = $.fn.dataTable.Api("#list");
// up arrow &#9650;
// down arrow&#9660;
function sortClick(table){
  $(".sort").on("click", function() {
    console.log("truck");
    // table.order([0, 'desc']).draw();
    table.order([0][1, "asc"]).draw()
    // table.search( "hel" ).draw();
    // var data = table
    //     .ordering( [ 1, 'asc' ] )
    //     .draw();
    });
}
