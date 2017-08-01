$(function() {

    $("#theform").bind("submit", function(e) {

        var ready = !$("#btnSubmit")[0].classList.contains("disabled")
        if (ready) {
            showResult(-1);
            var data = $(this).serialize();
            console.log(data);
            $.ajax({
                type: "post",
                async: true,
                url: "/score",
                dataType: "jsonp",
                jsonp: "callback",
                data: data,
                success: function(json) {
                    console.log(json.score);
                    if (json.score.indexOf("1") >= 0) {
                        showResult(1);
                    } else {
                        showResult(0);
                    }
                },
                error: function(err, str) {}
            });
            return false;
        }
    });

    $(".form-control").bind("focus", function(e) {
        showResult(-2);
    });

    $(".form-control").bind("keydown", function(e) {
        showResult(-2);
    });

    $(".form-control").bind("click", function(e) {
        showResult(-2);
    });

    function showResult(score) {
        if (score == -1) {
            $("#result").html("Assessing ...");
        } else if (score == 1) {
            $("#result").html('<span class="label label-danger">Risk: HIGH</span>');

        } else if (score == 0) {
            $("#result").html('<span class="label label-success">Risk: LOW</span>');
        } else if (score == -2) {
            $("#result").html('');
        }
    }

});