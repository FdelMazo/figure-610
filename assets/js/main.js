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

	$("#title").html(figure.title)
	$("#subtitle").html(figure.subtitle)

	showAllTexts(id)
	
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

	setTimeout(function(){
		$('#header').focus();
	});
}

function showAllTexts(id) {
	$("#texts").empty()
	FIGURES[id].texts.forEach(tt => { 
		$("#texts").append(`<h2 class="title">`+tt.title+`</h2>`)
		$("#texts").append(`<p class="text">`+tt.text+`</p>`)
	})

	// Is the scrollbar present?
	if ($("#header").prop('scrollHeight') > $("#header").prop('offsetHeight')) {
		$("#texts h2").after("<p class='highlighted' style='font-size: small'>Use the UP and DOWN arrows to scroll</p>")
	}

	setTimeout(function(){
		$('#header').focus();
	});
}

function show(title, text) {
	$("#texts").empty()
	$("#texts").append(`<h2 class="title">`+title+`</h2>`)
	$("#texts").append(`<p class="text">`+text+`</p>`)

	// Is the scrollbar present?
	if ($("#header").prop('scrollHeight') > $("#header").prop('offsetHeight')) {
		$("#texts h2").after("<p class='highlighted' style='font-size: small'>Use the UP and DOWN arrows to scroll</p>")
	}

	setTimeout(function(){
		$('#header').focus();
	});
}

function imageMap(id) {
	let imagemap = FIGURES[id].imagemap
	let html = `<img class="image" id="img-`+id+`" src="assets/figures/`+id+`.png" usemap="#image-map-`+id+`">`
	html += `<map name="image-map-`+id+`">`
	imagemap.forEach( map => {
		html += `<area onmouseout="showAllTexts(`+id+`)" onmouseover="show(\``+map.title+`\`,\``+map.text+`\`)" href="#" coords="`+map.coords+`" shape="`+map.shape+`"`
		if (map.pointsto)
			html += `color="blue" onclick=load(`+map.pointsto+`) `
		else 
			html += `class="nocursor" color="green" `
		html += ` >`
	})
	html += "</map>"
	return html
}
