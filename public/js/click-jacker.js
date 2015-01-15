(function() {
	document.addEventListener("click", function(e) {
		if (e.target.dataset["contentLink"]) {
			e.preventDefault();

			var contentId = e.target.dataset["contentLink"];
            content.innerHTML = $("#" + contentId).text();
            pag.innerHTML = $("#" + contentId.substr(0, 3) + "-pag").text();
		}
	});
})();