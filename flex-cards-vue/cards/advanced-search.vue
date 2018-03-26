<template>
    <div class="advanced-search">
        <div class="panel" id="display-style">
            <div class="panel-head">
                <h3>Display Style</h3>
            </div>
            <div class="clearfix panel-body">
                <ul class="menu none">
                    <li>
                        <a href="/events">
                            <span>Learner View</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/events">
                            <span>Administrator View</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <h3>Refine results
            <i class="fa fa-filter"></i>
        </h3>
        <label class="full-width">
            Search
            <i class="fa fa-search"></i>
            <input>
        </label>
        <label class="full-width">
            Ethics board approval
            <br>
            <input type="radio" name="ethics">Yes
            <br>
            <input type="radio" name="ethics">No
            <br>
            <input type="radio" name="ethics">blank
            <br>
        </label>
        <label class="full-width">
            Cycles
            <input>
        </label>
        <label class="full-width">
            Supervisor
            <input>
        </label>
        <label class="full-width">
            Activity start
            <i class="fa fa-calendar"></i>
            <input type="date">
        </label>
        <label class="full-width">
            Activity End
            <i class="fa fa-calendar"></i>
            <input type="date">
        </label>
        <label class="full-width">
            Max number of students
            <i class="fa fa-group"></i>
            <input type="number">
        </label>
        <label class="full-width">
            Min number of students
            <i class="fa fa-group"></i>
            <input type="number">
        </label>
        <label class="full-width">
            Estimate hours
            <i class="fa fa-clock-o"></i>
            <input type="number">
        </label>
        <label class="full-width">
            Site
            <br>
            <input type="checkbox" name="site">VFMP
            <br>
            <input type="checkbox" name="site">IMP
            <br>
            <input type="checkbox" name="site">SMP
            <br>
            <input type="checkbox" name="site">VFMP
            <br>
        </label>
        <label class="full-width">
            Status
            <br>
            <input type="checkbox" name="status">Proposed
            <br>
            <input type="checkbox" name="status">Active
            <br>
            <input type="checkbox" name="status">Revised
            <br>
        </label>
    </div>
</template>

<script>
module.exports = {
  data: function() {
    msg: "advanced search";
  }
};
</script>
<style scoped>
i {
  float: right;
  font-size: 1.5em;
  margin-top: -10px;
  margin-right: 17px;
}

input {
  width: 100%;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
}
</style>