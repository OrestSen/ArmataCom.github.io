$(document).ready(function () {

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function () {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function () {
		$("html, body").animate({ scrollTop: $(".main-head").height() + 120 }, "slow");
		return false;
	});

	$(".section_1 .section-content .info-item").equalHeights();
	$(".s2-item").equalHeights();
	$(".s2-item .img-wrap").equalHeights();
	$(".section_3 .section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".section_6 .section-pb .team").equalHeights();


	
	$(".section_2").waypoint(function () {
		$(".s2-item-wrap").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass("on");
			}, 200 * index);
		});
	}, {
		offset: "20%"
	});

	$(".section_4").waypoint(function () {
		$(".section_4 .card").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("card-off").addClass("card-on");
			}, 200 * index);
		});

	}, {
		offset: "20%"
	});


	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function (dir) {

			if (dir === "down") {

				$(".section_5 .triangle-item").each(function (index) {
					var ths = $(this);
					setTimeout(function () {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tr-content").addClass("tr-content-on");
					}, 500 * index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".section_6").waypoint(function () {

		$(".section_6 .team").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.removeClass("team-off").addClass("team-on");
			}, 200 * index);
		});

	}, {
		offset: "35%"
	});

	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 500,
		autoplaySpeed: 500,
		navSpeed: 500,
		dotsSpeed: 500,
		dragEndSpeed: 500
	});

	$(".section-head h2, .section-head p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider .slide").animated("fadeIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");
	$(".homesect.section_8 .s8-content-text").animated("fadeIn");

	$(".section_8").waypoint(function () {
		$(".s8-item").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass("on");
			}, 200 * index);
		});
	}, {
		offset: "30%"
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".homesect .section-bottom .buttons").click(function () {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type: "inline",
		mainClass: 'mfp-forms'
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});