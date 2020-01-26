var stackframe = [0]

function load(id) {
	if (id == 0) {
		window.location = "http://fdelmazo.github.io/figure-610/"
		return
	}
	stackframe.push(id)
	let figure = FIGURES[id]

	$("#icon").removeClass("icon-b fa-github")
	$("#icon").addClass("icon fa-arrow-left")

	$("#navigate").removeAttr("href")
	$("#navigate").removeAttr("target")
	$("#navigate").css("cursor","pointer")
	
	$("#navigate").off("click").on("click", function() {
		stackframe.pop()
		let goback = stackframe.pop()
		load(goback)
	})

	$("#container").html(imageMap(id))

	$("#title").text(figure.title)
	$("#subtitle").text(figure.subtitle)
	$("#texttitle").text(figure.texttitle)
	$("#text").text(figure.text)

	$("#img-"+id).mapster({
		stroke: true, 
		mapKey: "color",
		fill: false,
		staticState: true,
		strokeWidth: 5,
		areas: [{
			key: 'blue',
			strokeColor: '3498db', 
        },
        { 
			key: 'green',
			strokeColor: '2ecc71', 
			isSelectable: false
        }]
	});
}

function show(title, text) {
	$("#texttitle").text(title)
	$("#text").text(text)
}

function imageMap(id) {
	let imagemap = FIGURES[id].imagemap
	let texttitle = FIGURES[id].texttitle
	let text = FIGURES[id].text
	let html = `<img id="img-`+id+`" src="assets/figures/`+id+`.png" usemap="#image-map-`+id+`">`
	html += `<map name="image-map-`+id+`">`
	imagemap.forEach( map => {
		html += `<area onmouseout="show(\``+texttitle+`\`,\``+text+`\`)" onmouseover="show(\``+map.title+`\`,\``+map.text+`\`)" href="#" coords="`+map.coords+`" shape="`+map.shape+`"`
		if (map.pointsto)
			html += `color="blue" onclick=load(`+map.pointsto+`) `
		else 
			html += `class="nocursor" color="green" `
		html += ` >`
	})
	html += "</map>"
	return html
}
