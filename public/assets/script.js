// This is the front-side Javascript file that handles click events
$(document).ready(function() {
    $('#main_content form').submit(function(){
        event.preventDefault();
        // A new burger object is being created
        var newBurger = {
            burger: $('#burger_choice').val().trim(),
            eaten: 0
        };
        // An ajax request is made to the api path 'burgers', which is found in controllers/burgerController.js
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
        $('#burger_choice').val('');
    });
    $('.gnosh').click(function(){
        // A burger is being chosen for eating
        var id = $(this).closest('div').data('id');
        var gnoshed = {
            id: id,
            eaten: 1
        }
        // Defining the path of the api request by attaching the id of the burger
        $.ajax("/api/gnosh/" + id, {
            type: "PUT",
            data: gnoshed
        }).then(
            function() {
                location.reload();
            }
        );
    });
});