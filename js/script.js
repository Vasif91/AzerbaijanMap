function azerixerite() {
    $("#svg-azeri-xerite polygon.reng").hover(function() {
        $(".tool").html("<div>" + $(this).data("adi") + "</div>");
        $(this).on("mousemove", function(event) {
            $(".tool").css("top", (event.pageY + 25));
            $(".tool").css("left", event.pageX);
        });
    }, function() {
        $(".tool").html("");
    });
}