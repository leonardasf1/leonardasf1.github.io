function vAll(id) { return document.querySelectorAll(id) }

(function() {
	vAll(".f1c").forEach(i => i.append('<img src="icons/F1C.ico" title="F1C">'));
	vAll(".rf").forEach(i => i.append('<img src="icons/rFactor.ico" title="rFactor">'));
	vAll(".gtr2").forEach(i => i.append('<img src="icons/GTR2.ico" title="GTR2">'));
	vAll(".cod").forEach(i => i.append('<img src="icons/codemasters.png" title="Codemasters">'));
	vAll(".vi").forEach(i => i.append('<img src="icons/video.jpg" title="video">'));
	vAll(".info").forEach(i => i.append('info'));
	vAll(".foto").forEach(i => i.append('foto'));
})();