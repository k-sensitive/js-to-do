$(document).ready(function() {
  $("#add-task").click(function() {
    $("#new-task").append('<div class="new-task">' +
    '<div class="form-group">' +
    '<label for="new-task-name">Task</label>' +
    '<input type="text" class="form-control new-task-name">' +
    '</div>' +
    '</div>');
  });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input.new-list-name").val();

    var newList = { listName: inputtedListName, tasks: [] };

    $(".new-task").each(function() {
      var inputtedTask = $(this).find("input.new-task-name").val();

      var newTask = { taskName: inputtedTask };
      newList.tasks.push(newTask);
    });


    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");

    $(".list").last().click(function() {
      $("#show-list").show();

      $("#show-list h2").text(newList.listName);
      $(".list-name").text(newList.listName);

      $("ul#tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='task'>" + task.taskName + "</span></li>");
      });

      $( ".task" ).click(function() {
        $( this ).remove();
      });
    });

    $("input.new-list-name").val("");
    $("input.new-task-name").val("");


  });

});
