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
    var studentHistory = 
    `<h1 class='student'>Student Activity Histroy</h1>
    <table id="stu-hist" class='student table'>
    <thead>
      <tr>
        <th data-priority="1"> 
          <div>Activity ID</div>
        </th>
        <th> 
          <div>Activity Title</div>
        </th>
        <th> 
          <div>Activity Status</div>
        </th>
        <th> 
          <div>Primary Supervisor</div>
        </th>
        <th data-priority="2"> 
          <div>Cycle</div>
        </th>
        <th>
          <div>Start Date</div>
        </th>
        <th>
          <div>End Date</div>
        </th>
        <th>
          <div>Description</div>
        </th>
        <th>
          <div>Max hours</div>
        </th>
        <th>
          <div>Est # of hours</div>
        </th>
        <th>
          <div>Max # of Students</div>
        </th>
        <th data-priority="4"> 
          <div>Site</div>
        </th>
        <th data-priority="3">Link to Activity</th>
      </tr>
    </thead>
    <tbody class="striped"> 
      <tr>
        <td contenteditable='true'> <a contenteditable='true' href="#">00001</a></td>
        <td contenteditable='true'>Translational Research in Acute Cerebrovascular Syndrome (ACVS)</td>
        <td>Completed</td>
        <td> 
          <div> <a href="mailto:kristine.votova@viha.ca">Votova, Kristine </a></div>
          <div>Penn, Andrew</div>
        </td>
        <td>1</td>
        <td>05-mar-18</td>
        <td>09-Apr-18</td>
        <td>5 half-days</td>
        <td>20</td>
        <td>20</td>
        <td>10</td>
        <td>IMP</td>
        <td> <a href="#">View Activity</a></td>
      </tr>
      <tr>
        <td> <a href="#">00001</a></td>
        <td>Translational Research in Acute Cerebrovascular Syndrome (ACVS)</td>
        <td>Completed</td>
        <td> 
          <div> <a href="mailto:kristine.votova@viha.ca">Votova, Kristine </a></div>
          <div>Penn, Andrew</div>
        </td>
        <td>2</td>
        <td>05-mar-18</td>
        <td>09-Apr-18</td>
        <td>5 half-days</td>
        <td>20</td>
        <td>20</td>
        <td>10</td>
        <td>IMP</td>
        <td> <a href="#">View Activity        </a></td>
      </tr>
    </table>`
    $('body').append(studentHistory);
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
      input = '<div id="cycleFilterOptions" class="input-container"><input id="one"type="checkbox"><label for="one">1</label>'+
              '<input id="two"type="checkbox"><label for="two">2</label>'+
              '<input id="three"type="checkbox"><label for="three">3</label>'+
              '<input id="four"type="checkbox"><label for="four">4</label>'+
              '<input id="five"type="checkbox"><label for="five">5</label>'+
              '<input id="six"type="checkbox"><label for="six">6</label>'+
              '<input id="seven"type="checkbox"><label for="seven">7</label>'+
              '<input id="eight"type="checkbox"><label for="eight">8</label>'+
              '<input id="nine"type="checkbox"><label for="nine">9</label>'+
              '<input id="ten"type="checkbox"><label for="ten">10</label>'+
              '<input id="eleven"type="checkbox"><label for="eleven">11</label></div>';
      break;
    case "startFilter":
      //fallthrough
    case "endFilter":
      input = '<div class="input-container" id="datepicker"></div>';
      break
    case "maxHrFilter":
      //fallthrough
    case "estFilter":
      //fallthrough
    case "maxStuFilter":
      input ='<div class="input-container" id="number">'+
      '<input type="radio" id="one" name="one" value="1"><label for="one"> < 1</label>'+
      '<input type="radio" id="two" name="one" value="2"><label for="one"> 1 - 2</label>'+
      '<input type="radio" id="three" name="one" value="3"><label for="one">2 - 4</label>'+
      '<input type="radio" id="four" name="one" value="4"><label for="one">4 -5 </label>'+
      '<input type="radio" id="five" name="one" value="5"><label for="one">5+</label></div>'
      break;
    case "siteFilter":
      input = '<div class="input-container" id="siteFilter">'+
      '<input id="vfmp" type="checkbox"><label for="VFMP">VFMP</label>'+
      '<input id="imp" type="checkbox"><label for="IMP">IMP</label>'+
      '<input id="nmp" type="checkbox"><label for="NMP">NMP</label>'+
      '<input id="smp" type="checkbox"><label for="SMP">SMP</label></div>';
      break;
    default:
      input ="<input class='input-container' type='text' placeholder='search'>";
  }
  var elem = $(obj.element).parent();
  if (elem.find('.input-container').length > 0) {
    elem.find('.input-container').remove();
  } else {
    elem.append(input);
    $( "#datepicker" ).datepicker();
  }
}