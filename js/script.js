function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode != 46 && charCode > 31 &&
		(charCode < 48 || charCode > 57))
		return false;

	return true;
}

function number_format(number, decimals, dec_point, thousands_sep) {
	// Strip all characters but numerical ones.
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}

function calcul(salaire) {
	var amount = parseInt(salaire);
	var apprentissage = 0;
	if ($('input[name=alsace]').is(':checked')) {
		apprentissage = amount * 0.0044;
	} else {
		apprentissage = amount * 0.0068;
	}
	return apprentissage;
}
if ($(window).width() > 1023) {
	if (window.location.hash) {
		var hash = window.location.hash;
		
		$('.menu li').removeClass("active");
		$('.menu li a[href="' + hash + '"]').parents("li").addClass("active");
	}
}

$(function () {
	$("#banner-cookies button").click(function () {
		$("#banner-cookies").css("display", "none");
	});
	if (!$("#banner-cookies")[0]) {
		$("body").addClass("remove-cookies");
	}
	$(document).on('click', '#banner-cookies button', function () {
		$.ajax({
			url: 'cookies.php',
			type: 'GET',
			success: function (code_html, statut) {
				$("#banner-cookies").fadeOut(800);
				$("body").addClass("remove-cookies");
			}
		});
	});
	jcf.replace("#RegionSearch");
	jcf.replace(".check-region input");
	jcf.replace("#departement");
	jcf.replace("#filiere");

	$('#accordion').on('show.bs.collapse', function () {
		jcf.destroy(".panel-body div");
		if ($(window).width() > 1023) {
			setTimeout(function () {
				jcf.replace(".panel-body div");
			})
		}

	})
	if ($(window).width() > 1300) {

		$('.slide-realisations').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplaySpeed: 2000,
			infinite: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					autoplay: false,
					adaptiveHeight: true
				}
				}]
		});

	} else if ($(window).width() > 1023) {

		$('.slide-realisations').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplaySpeed: 2000,
			infinite: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					autoplay: false,
					adaptiveHeight: true
				}
				}]
		});
	} else {
		$('.slide-realisations').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			responsive: [{
				breakpoint: 992,
				settings: {
					autoplay: false,
					adaptiveHeight: true
				}
				}]
		});
	}
	$('.slide-pk').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
	});
	if ($(window).width() < 1024) {
		$('.contenu-blk').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
		});
		$('.departement .d-m-b .resultat').hide();
		$('.departement .d-m-b .verse').hide();
		$('.recherche').click(function (e) {
			e.preventDefault();
			$(this).attr('href', '');
			if ($("#filiere").val() != "" || $("#departement").val() != "") {
				$(this).addClass('active');
				$('.departement .resultat').show();
				$('.departement .d-m-b .verse').show();
			} else {
				$(this).removeClass('active');
				$('.departement .resultat').hide();
				$('.departement .d-m-b .verse').hide();
			}

			// $('.departement .resultat').toggle();
		});
	}
	if ($(window).width() > 1023) {
		$('.slide-expertise').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
		});
		$(".btns").append($(".slide-expertise .slick-prev"));
		$(".btns").append($(".slide-expertise .slick-next"));
	}

	if ($(window).width() > 1023) {


		var heightWindow = $(window).height();
		$('.section,.blk-image').innerHeight(heightWindow);
	} else {
		var heightWindow = $(window).height();
		$('.section1').innerHeight(heightWindow);

	}

	$('.menu2 li a:not(.verse-solde)').click(function (e) {
		var hash = $(this).attr('href');
		if (hash == "#etablissements") {
			$('.click-menu').addClass('blue');
		} else {
			$('.click-menu').removeClass('blue');
		}
		if ($(window).width() < 1024) {
			$('.section').not($(hash)).hide();
			$(hash).show();
		}
	})

	$("#jeverse").on('show.bs.modal', function () {
		$("#resultats").modal('hide');
	});

	$(window).resize(function () {

		// ***************************************************************************************
		$('.menu2 li a:not(.verse-solde)').click(function (e) {
			var hash = $(this).attr('href');
			
			if ($(window).width() < 1023) {
				$('.section').not($(hash)).hide();
				$(hash).show();
			}
		})

		if ($(window).width() > 1023) {

			var hash = window.location.hash;
			if (hash != "") {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top
				}, 0);
			}
			var heightWindow = $(window).height();
			$('.section,.blk-image').innerHeight(heightWindow);
		} else {

			var heightWindow = $(window).height();
			$('.section1').innerHeight(heightWindow);
		}

		if ($(window).width() > 1023) {
			$('.slide-expertise').slick({
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
			});
			$(".btns").append($(".slide-expertise .slick-prev"));
			$(".btns").append($(".slide-expertise .slick-next"));
		}
		// ***************************************************************************************
	})
	$('.menu-resp .click-menu').click(function (e) {
		$(this).addClass('active');
		$(this).parents(".menu-resp").addClass('active');
		$('.menu-resp .menu1').addClass('active');
		$('.click-menu').removeClass('blue');
		if ($(window).width() < 1024) {
			$(".section").show();
			$(".section8 ,.section9").hide();
		}

	})
	$('.blk-menu2 .pop-ideas span').click(function (e) {
		$('.pop-ideas').toggleClass('active');
	});
	$('.recherche').click(function (e) {
		$('body').addClass('popup-active');
	});
	$('#resultats .verse').click(function (e) {
		$('body.modal-open').removeClass('popup-active');
		$("#resultats").modal('hide');
	});

	$('.menu ul li').click(function (e) {
		$('.menu ul li').removeClass('active');
		$(this).addClass('active');
		$('.menu-resp .menu1').removeClass('active');
		$('.menu-resp, .menu-resp .click-menu').removeClass('active');

	})
	$('.menu1 ul li a').click(function (e) {
		if ($(window).width() < 1024) {
			e.preventDefault();
			
			var section = $(this).attr("href");
			$('html, body').stop().animate({
				scrollTop: $(section).offset().top - 134
			}, 0);
		}
	})

	$('#jeverse .close').click(function (e) {
		$('.menu2 ul li:last-child').removeClass('active');
	})

	$('.listItem').click(function (e) {
		$('.listItem').not($(this)).removeClass('active');
		$(this).toggleClass('active');

		if ($('.information .dropDown').is(":visible")) {
			$('.pdf').addClass('active');
		} else {
			$('.pdf').removeClass('active');
		}
	})

	var scrolling = false;
	if ($(window).scrollTop() > 0) {
		$('body').addClass('scroll');
	}
	$(window).scroll(function () {
		scrolling = true;
		if ($(window).scrollTop() > 0) {
			$('body').addClass('scroll');
		}
		if ($(window).scrollTop() == 0) {
			scrolling = false;
			$('body').removeClass('scroll');
		}
	});

	if ($('#accordion').length) {

		var $panels = $('.panel');

		$('.panel-heading h4 a').on('click', function (e) {

			$this = $(this);

			$panel = $this.parents('.panel');

			$panels.not($panel).removeClass('active');

			$panel.toggleClass('active');

		});
	}
	$('.salaire').keyup(function () {
		var amount = parseInt($(this).val());
		var calc = calcul(amount);
		var soldeAttribuer = calc * 0.13;
		var financement = calc * 0.87;
		$('.apprentissage').text(number_format(Math.ceil(calc), 0, '.', ' '));
		$('.solde-attribuer').text(number_format(Math.ceil(soldeAttribuer), 0, '.', ' '));
		$('.financement').text(number_format(Math.ceil(financement), 0, '.', ' '));
	})
	$('input[name=alsace]').change(function () {
		var amount = parseInt($(".salaire").val());
		var calc = calcul(amount);
		var soldeAttribuer = calc * 0.13;
		var financement = calc * 0.87;
		$('.apprentissage').text(number_format(Math.ceil(calc), 0, '.', ' '));
		$('.solde-attribuer').text(number_format(Math.ceil(soldeAttribuer), 0, '.', ' '));
		$('.financement').text(number_format(Math.ceil(financement), 0, '.', ' '));
	})
	$('.info-contact').hide();
	$('.contact button').click(function () {
		$.ajax({
				method: "POST",
				url: "./php/checkContactRegion.php",
				data: {
					id: $("#RegionSearch").val()
				},
				dataType: 'json'
			})
			.done(function (data) {
				
				if (data) {
					$("#resultRegion .nom").text(data.prenom + ' ' + data.nom);
					$("#resultRegion .tel").text(data.tel);
					$("#resultRegion .mail").text(data.email);
					$("#resultRegion .mail").attr('href', "mailto:" + data.email);
					$(".info-contact img").attr("src", "images/" + data.id + ".jpg");
					$('.info-contact').hide();
					setTimeout(function () {
						$('.info-contact').show();
					}, 1000)
				}

			});
	})

	var etablissements;
	$('#departement').change(function () {
		var departement = $(this).val();

		$.ajax({
				method: "POST",
				url: "./php/searchEtablisement.php",
				data: {
					departement: departement
				},
				dataType: 'json'
			})
			.done(function (data) {
				
				if (data) {
					etablissements = data.etablissements;

					$("#filiere").html('<option class="hideme" value="">Filière</option>');
					jcf.destroy("#filiere");
					jcf.replace("#filiere");
					$.each(data.filieres, function (key, filiere) {
						$('#filiere').append('<option value="' + filiere.id_filiere + '">' + filiere.nom_filiere + '</option>');
					});
				}

			});
	})
	$('#departement').trigger('change');

	function inArray(needle, haystack) {
		var length = haystack.length;
		for (var i = 0; i < length; i++) {
			if (haystack[i] == needle) return true;
		}
		return false;
	}

	$('.recherche').click(function (e) {
		if ($("#filiere").val() == "" && $("#departement").val() == "") {
			e.preventDefault();
			$(this).attr('href', '');

			
		} else {
			
			if ($(window).width() > 1023) {
				$(this).attr('href', '#resultats');
			}
			var id_filiere = $("#filiere").val();
			$("#resultats  #departementSearch").text($("#departement option:selected").text());
			$("#resultats  #secteurSearch").text($("#filiere option:selected").text());
			$(".resultat").html('');
			var result = 0;

			if (id_filiere != "") {
				$.each(etablissements, function (key, etablisement) {
					result++;
					
					if (inArray(parseInt(id_filiere), etablisement.filieres)) {
						var html = '<div class="box" title="SELECTIONNEZ UN ETABLISSEMENT" data-link="' + etablisement.url + '" ><div class="etab">' + etablisement.nom_etabl + '</div><div class="adresse">' + etablisement.adresse + '</div><div class="code">Code U.A.I. : <span class="uai">' + etablisement.uai + '</span> | <span class="secteurSearch">' + $("#filiere option:selected").text() + '</span></div></div>'
						$(".resultat").append(html);
					}
				});
			} else {
				$.each(etablissements, function (key, etablisement) {
					result++;
					
					var html = '<div class="box" title="SELECTIONNEZ UN ETABLISSEMENT" data-link="' + etablisement.url + '" ><div class="etab">' + etablisement.nom_etabl + '</div><div class="adresse">' + etablisement.adresse + '</div><div class="code">Code U.A.I. : <span class="uai">' + etablisement.uai + '</span> | <span class="secteurSearch">' + $("#filiere option:selected").text() + '</span></div></div>'
					$(".resultat").append(html);
				});
			}
			
			if (result == "1") {
				$("#resultats .verse, .departement .d-m-b .verse").css("pointer-events", "visible");
				$(".mentions").hide();
				var link = $(".box").attr('data-link');
				// var link = "https://aa-prod.givexpert.org/ecoleproductionjeanmarievianney";
				var montant = $('.solde-attribuer').text();
				if (montant) {
					$("#resultats .verse, .departement .d-m-b .verse").attr("href", link + '/fill?montant=' + montant.replace(" ", ""));
				} else {
					$("#resultats .verse, .departement .d-m-b .verse").attr("href", link);
				}
			} else {
				$(".mentions").show();
				$("#resultats .verse, .departement .d-m-b .verse").css("pointer-events", "none")

			}

			$("#resultats .box, .departement .d-m-b .box").click(function () {
				var montant = $('.solde-attribuer').text();
				$("#resultats .box, .departement .d-m-b .box").not($(this)).removeClass('selected');
				$("#resultats .verse, .departement .d-m-b .verse").css("pointer-events", "visible");
				$(this).addClass('selected');
				if (montant) {
					$("#resultats .verse, .departement .d-m-b .verse").attr("href", $("#resultats .box.selected, .departement .d-m-b .box.selected").attr('data-link') + '/fill?montant=' + montant.replace(" ", ""))
					//$("#resultats .verse, .departement .d-m-b .verse").attr("href",'https://aa-prod.givexpert.org/ecoleproductionjeanmarievianney/fill?montant='+montant)

				} else {
					$("#resultats .verse, .departement .d-m-b .verse").attr("href", $("#resultats .box.selected, .departement .d-m-b .box.selected").attr('data-link'))
					//$("#resultats .verse, .departement .d-m-b .verse").attr("href","https://aa-prod.givexpert.org/ecoleproductionjeanmarievianney")

				}
			})



		}

	})
	$('.verse').click(function (e) {
		var montant = $('.solde-attribuer').text();
		if (montant) {
			$('a.auteuil').attr("href", "https://versement-taxeapprentissage.apprentis-auteuil.org/ofapprentisauteuil/fill?montant=" + montant.replace(" ", ""))
		} else {
			$('a.auteuil').attr("href", "https://versement-taxeapprentissage.apprentis-auteuil.org/ofapprentisauteuil");

		}
		// if(montant){
		// 	$('a.auteuil').attr("href","https://aa-prod.givexpert.org/ecoleproductionjeanmarievianney/fill?montant="+montant)
		// }else{
		// 	$('a.auteuil').attr("href","https://aa-prod.givexpert.org/ecoleproductionjeanmarievianney");
		// }
	})
	$('.verser, .etablisement').click(function (e) {
		setTimeout(function () {
			$(".menu2 li a.trouve-etab")[0].click()
		}, 600)

	})
	$('.infobull').click(function (e) {
		var dataDep = $(this).attr('data-dept');
		jcf.destroy("#departement");
		$('#departement').val(dataDep).change();
		jcf.replace("#departement");
	})
	$('.calcule').click(function (e) {
		$(".menu2 li:first-child a")[0].click()
	})
	$('.etablisement').click(function (e) {
		$(".menu2 li a.trouve-etab")[0].click()
	})

	$('.menu2 ul li a:first-child').click(function () {
		if ($(window).height() > 1023) {
			$("#calcul").height($(window).height());
		} else {
			$("#calcul").height("auto");
		}

	})
	$('#accordion .panel .panel-body a').click(function () {
		$('.menu1 li a:last-child').click();
	})
	$(window).on('resize orientationchange', function () {
		$('.slick-slider').slick('resize');
	});



	var windowSize = {
		w: window.outerWidth,
		h: window.outerHeight,
		iw: window.innerWidth,
		ih: window.innerHeight
	};

	window.addEventListener("resize", function () {
		//if window resizes
		if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
			windowSize.w = window.outerWidth; // update object with current window properties
			windowSize.h = window.outerHeight;
			windowSize.iw = window.innerWidth;
			windowSize.ih = window.innerHeight;
			
			var hash = window.location.hash;
			var heightWindow = $(window).height();
			$('.section,.blk-image').innerHeight(heightWindow);

			if (hash != "") {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top
				}, 0);
			}

		}
		//if the window doesn't resize but the content inside does by + or - 5%
		else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
			window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
			
			var hash = window.location.hash;
			var heightWindow = $(window).height();
			$('.section,.blk-image').innerHeight(heightWindow);

			if (hash != "") {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top
				}, 0);
			}

			windowSize.iw = window.innerWidth;
		}
	}, false);



})
