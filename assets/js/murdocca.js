function load(id) {
	if (id == 0) {
		window.location = "http://fdelmazo.github.io/figure-610/"
		return
	}
	
	let goback = $(".main")[0].id
	let figure = FIGURES[id]

	$("#icon").removeClass("icon-b fa-github")
	$("#icon").addClass("icon fa-arrow-left")

	$($(".main")[0]).attr("id", id)

	$("#navigate").removeAttr("href")
	$("#navigate").removeAttr("target")
	$("#navigate").css("cursor","pointer")
	
	$("#navigate").off("click").on("click", function() {
		load(goback)
	})

	let html = `<img src="assets/figures/`+id+`.png"></img>`
	$("#container").html(html)

	$("#title").text(figure.title)
	$("#subtitle").text(figure.subtitle)
	$("#text").text(figure.text)
}