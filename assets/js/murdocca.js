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

	$("#container").html(imageMap(id))

	$("#title").text(figure.title)
	$("#subtitle").text(figure.subtitle)
	$("#text").text(figure.text)

	$("#img-"+id).mapster();
}

function imageMap(id) {
	let imagemap = FIGURES[id].imagemap
	let html = `<img id="img-`+id+`" src="assets/figures/`+id+`.png" usemap="#image-map-`+id+`">`
	html += `<map name="image-map-`+id+`">`
	imagemap.forEach( map => {
		if (map.pointsto)
			html += `<area href="#" coords="`+map.coords+`" shape="`+map.shape+`">`
		else
			html += `<area href="#" coords="`+map.coords+`" shape="`+map.shape+`">`
	})
	html += "</map>"
	return html
}
