$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "breedlist.json",
        beforeSend: function () {
            $("#breed").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#breed").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#breed").append(
                        "<h3 style=\"color:rgb(0, 7, 71);\">" + value.breedname + "</h2>" +
                        "<p style=\"text-align:center;\">Average height: " + value.height + "</p>" +
                        "<p style=\"text-align:center;\">Average weight: " + value.weight + "</p>" +
                        "<p style=\"text-align:center;\">Average lifespan: " + value.lifespan + "</p>" +
                        "<br>"
                    );
                });
            });

        }
    });

});
