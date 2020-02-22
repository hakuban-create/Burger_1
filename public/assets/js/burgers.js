$(function() {

      // Send the POST request.
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newEntry = {
        name: $("#newBurger").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newEntry
      }).then(
        function() {
          console.log("created new Entry");
          location.reload();
        }
      );
    });

    $(".deleteBurger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log("updateding to delete");
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          location.reload();
        }
      );
    });

  
  });
  
  