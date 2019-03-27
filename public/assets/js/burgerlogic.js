// client side javascript

//consume burgers
$(function () {
  $(".devour").on("click", function (event) {
    event.preventDefault();
    console.log("devourit" + event.target.id);
    var id = event.target.id;
    var devour = { devour: id };
    // Send the PUT request.
    $.ajax("/api/devour/" + id, {
      type: "PUT",
      data: devour
    }).then(
      function () {
         location.reload();
      }
    );
  });

  //create new burgers
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var new_burger = {
      name: $("#add_burger").val().trim(),
      eaten: false
    };

    // Send the POST request.
    $.ajax("/api/addburger", {
      type: "POST",
      data: new_burger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

});
 