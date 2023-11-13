$(function () {

	//브라우저 높이 값에 맞춰 section영역 높이 조절하기 
	var winHeight = $(window).innerHeight(),
		$section = $('section'),
		$header = $('header');

	$section.height(winHeight);
	$header.height(winHeight);

	$(window).on('resize', function () {

		var winHeight = $(window).outerHeight();

		$section.height(winHeight);
		$header.height(winHeight);

	});

	var $gnb = $header.find('#gnb'),
		$headerinner = $header.find('.inner'),
		$open = $('#open'),
		$close = $header.find('#close');


	//메뉴 클릭시 해당 라인으로 이동하기
	$gnb.on('click', 'li', function (e) {
		
		e.preventDefault();
		var winHeight = $(window).outerHeight(),
			index = $(this).index(),
			newTop = winHeight * index;
$("#close").toggleClass("is-active");

	$headerinner.stop().animate({
			'width':0
		}, 300, function () {
			$gnb.stop().animate({
				'left': '-40%'
			}, 500, function () {
			
			$header.removeClass('on');
				$("#close").removeClass("is-active")
			});
		});
				$header.stop().animate({
			scrollTop: newTop
		}, 'easeInSine');
		$('body').stop().animate({
			scrollTop: newTop
		}, 1800, 'easeInSine');
		
	});


	$open.on('click', function (e) {
		e.preventDefault();
		var winHeight = $(window).outerHeight(),
			index = $section.index(),
			newTop = winHeight * index;

		$("#open").toggleClass("is-active");

		$header.stop().animate({
			scrollTop: newTop
		});

		$header.addClass('on', 100, function () {
			$gnb.stop().animate({
				'left': 0
			}, 800, function () {
				$headerinner.stop().animate({
					'width': '100%'
				}, 900);
				$("#open").removeClass("is-active")
			});
		});
	});

	$close.on('click', function (e) {
		e.preventDefault();
		var winHeight = $(window).outerHeight(),
			index = $section.index(),
			newTop = winHeight * index;
		$("#close").toggleClass("is-active");
		$header.stop().animate({
			scrollTop: newTop
		},1000, 'easeInSine');

		$headerinner.stop().animate({
			'width': 0
		}, 600, function () {
			$gnb.stop().animate({
				'left': '-40%'
			}, 800, function () {
				$header.removeClass('on');
				$("#close").removeClass("is-active")
			});
		});

	});

	//스크롤
	$section.on('mousewheel', function (event, delta) {

		if (delta > 0) {

			var up = $(this).prev().offset().top;

			$('body').stop().animate({
				scrollTop: up
			}, 800, 'easeInSine');

		} else if (delta < 0) {
			var down = $(this).next().offset().top;

			$('body').stop().animate({
				scrollTop: down
			}, 800, 'easeInSine');

		}


	});

	//순서대로 불켜지기
	$(window).on('scroll', function () {
		var winH = $(window).outerHeight(),
			scroll = Math.floor($(window).scrollTop() + winH / 2),
			$menu = $('header .inner #gnb li');

		for (var i = 0; i < 4; i++) {
			if (scroll >= winH * i && scroll < winH * (i + 1)) {
				$menu.removeClass('on');
				$menu.eq(i).addClass('on');

			}
		}

	});

	//각 페이지 인입시 효과 생성하기
	$(window).on('scroll', function () {
		//지역변수 선언
		var winH = $(window).outerHeight(),
			scroll = Math.floor($(window).scrollTop() + winH / 2);


		//첫번째 section 구간
		if (scroll >= winH * 0 && scroll < winH * 1) {
			
				var $section1 = $('#contents section:nth-child(1)'),
						$secton1ul=$section1.find('ul'),
							$section1span1 = $secton1ul.find('li:nth-child(1)'),
							$section1span2 = $secton1ul.find('li:nth-child(2)'),
							$section1span3 = $secton1ul.find('li:nth-child(3)'),
							$section1span4 = $secton1ul.find('li:nth-child(4)'),
							$section1span5 = $secton1ul.find('li:nth-child(5)'),
							$section1span6 = $secton1ul.find('li:nth-child(6)'),
							$section1span7 = $secton1ul.find('li:nth-child(7)'),
							$section1span8 = $secton1ul.find('li:nth-child(8)'),
							$section1span9 = $secton1ul.find('li:nth-child(9)'),
							$section1span10 = $secton1ul.find('li:nth-child(10)');
		
		
			$secton1ul.each(function(i){
				$section1span1.find('span').stop().animate({
					opacity:1,
					'top':'200px'
				},1000,function(){
					$section1span1.stop().animate({
						'opacity':0
					});
					$section1span2.find('span').stop().animate({
						'opacity':1,	
						'top':'200px'
					},1000,function(){
						$section1span2.stop().animate({
						'opacity':0
					});
						$section1span3.find('span').stop().animate({
							'opacity':'1',
							'top':'200px'
						},1000,function(){
							$section1span3.stop().animate({
						'opacity':0
					});
							$section1span4.find('span').stop().animate({
								'opacity':'1',
								'top':'200px'
							},1000,function(){
								$section1span4.stop().animate({
						'opacity':0
					});
								$section1span5.find('span').stop().animate({
									'opacity':'1',
									'top':'200px'
								},1000,function(){
									$section1span5.stop().animate({
						'opacity':0
					});
									$section1span6.find('span').stop().animate({
										'opacity':'1',
										'top':'200px'
									},1000,function(){
										$section1span6.stop().animate({
						'opacity':0
					});
										$section1span7.find('span').stop().animate({
											'opacity':'1',	
											'top':'200px'
										},1000,function(){
											$section1span7.stop().animate({
						'opacity':0
					});
											$section1span8.find('span').stop().animate({
					
												'top':'200px'
											},function(){
												$section1span8.stop().animate({
						'opacity':0
					});
												$section1span9.find('span').stop().animate({
													'opacity':'1',
													'top':'200px'
												},1000,function(){
													$section1span9.stop().animate({
						'opacity':0
					});
													$section1span10.find('span').stop().animate({
														'opacity':'1',	
														'top':'200px'
													},1000,function(){
														$section1span10.stop().animate({
						'opacity':0
					});
													})
												});
											})
										})
									})
								})
							})
						})
					})
				})
			});

		}
		//두번째 section 구간
		if (scroll >= winH * 1 && scroll < winH * 2) {
			var $section2 = $('#contents section:nth-child(2)'),
				$section2h1 = $section2.find('h1'),
				$me = $section2.find('.me'),
				$section2h1strong = $section2h1.find('strong'),
				$skill = $section2.find('.skill'),
				$skillp = $skill.find('p'),
				$skillul = $skill.find('ul'),
				$skillli = $skillul.find('li'),
				$skillli1 = $skillul.find('li:nth-child(1)'),
				$skillli2 = $skillul.find('li:nth-child(2)'),
				$skillli3 = $skillul.find('li:nth-child(3)'),
				$skillli4 = $skillul.find('li:nth-child(4)'),
				$skillli5 = $skillul.find('li:nth-child(5)');


			$section2h1.each(function () {


				$me.stop().animate({
					'left': '30%',
					'opacity': '1'
				}, 1000, function () {
					$skill.stop().animate({
						'left': '80%',
						'opacity': '1'
					}, 1000, function () {
						$skillp.stop().animate({
							'width': '20%'
						}, 1000, function () {
							$skillul.stop().animate({
								'opacity': '1'
							});
							$skillli1.stop().animate({
								'top': 0
							}, 1000);
							$skillli2.stop().animate({
								'top': '20%'
							}, 1000);
							$skillli3.stop().animate({
								'top': '40%'
							}, 1000);
							$skillli4.stop().animate({
								'top': '60%'
							}, 1000);
							$skillli5.stop().animate({
								'top': '80%'
							}, 1000);


						})
					});
				
					
					
				});



			});
		}
		//세번째 section 구간
		if (scroll >= winH * 2 && scroll < winH * 3) {

			var $section3 = $('#contents section:nth-child(3)'),
				$deco = $section3.find('.deco'),
				$section3h1 = $section3.find('h1');

			$section3.each(function () {
				$deco.stop().animate({
					'width': '14%'
				}, 800, function () {
					$section3h1.addClass('one',800,function(){
						$section3h1.addClass('two',800)
					})
				});
			});

			

		}
		//네번째 section 구간
		if (scroll >= winH * 3 && scroll < winH * 4) {
			var $section4 = $('#contents section:nth-child(4)'),
				$section4p1 = $('#contents section:nth-child(4) p:nth-child(1)'),
				$call = $section4.find('.call'),
				$section4p2 = $('#contents section:nth-child(4) p:nth-child(2)'),
				$section4p1strong = $section4p1.find('strong'),
				$table = $call.find('table'),
				$tableinput = $table.find('input'),
				$tablebutton = $table.find('button'),
					$arrow=$section4.find('#arrow');


			$section4p1.each(function () {
				$(this).stop().animate({

					'width': '50%'
				}, 1000, function () {

					$section4p2.stop().animate({
						'width': '30.1%'
					}, 1000, function () {

						$section4p1strong.stop().animate({
							'opacity': '1'
						}, 1000, function () {
							$call.stop().animate({
								'width': '30%'
							}, 1000);
							$tableinput.stop().animate({
								'opacity': '1'
							}, 1000);
							$tablebutton.stop().animate({
								'opacity': '1'
							}, 1000,function(){
                                $section4.addClass('on');
								$arrow.stop().animate({
									'opacity':'1'
								})
                            });
						});
					});
				});


			})
		}


	});

	$('#contents section:nth-child(3)').each(function () {

		var $banner = $(this),
			$slides = $banner.find('.slides'),
			$pic = $slides.find('.pic'),
			$bannerbutton = $banner.find('.bannerbutton'),
			$indicator = $banner.find('.indicator');

		var count = $pic.length,
			interval = 5000,
			currentIndex = 0,
			indicatorHTML = '',
			timer;


		$pic.each(function (i) {
			$(this).css({
				left: 100 * i + '%'
			});
			indicatorHTML += '<a href="#"><i class="fa fa-circle"></i></a>';
		});

		$indicator.html(indicatorHTML);


		function play(i) {
			$slides.animate({
				left: -100 * i + '%'
			}, 500);
			currentIndex = i;
			updateNav();
		}


		function updateNav() {

			var $prev = $bannerbutton.find('.prev'),
				$next = $bannerbutton.find('.next');

			if (currentIndex == 0) {
				$prev.addClass('on')
			} else {
				$prev.removeClass('on')
			}

			if (currentIndex == count - 1) {
				$next.addClass('on')
			} else {
				$next.removeClass('on')
			}

			$indicator.find('a').removeClass('on');
			$indicator.find('a').eq(currentIndex).addClass('on');

		}


		$bannerbutton.on('click', 'a', function (e) {
			e.preventDefault();

			if ($(this).hasClass('next')) {
				play(currentIndex + 1)
			} else {
				play(currentIndex - 1)
			}
		});


		$indicator.on('click', 'a', function (e) {
			e.preventDefault();

			var i = $(this).index();

			if (!$(this).hasClass('on')) {
				play(i)
			}

		});
		play(currentIndex);

	});

	$(window).trigger('scroll');



	$('#arrow').on('click', function () {
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$('footer').stop().animate({
				'margin-top': 0
			}, 800, 'easeInSine');
			$('body').stop().animate({
				scrollTop: $('footer').offset().top
			}, 800, 'easeInSine');
		} else {
			$('footer').stop().animate({
				'margin-top': '-300px'
			}, 800, 'easeInSine');

		}


	});

	$(".hover").mouseleave(
		function () {
			$(this).removeClass("hover");
		}
	);


    $('.pp').each(function(){
        var $pp =$(this),
            $ppdeco=$(this).find('.deco'),
            $pph1=$(this).find('h1');
        
        $ppdeco.stop().animate({
            'width':'14%'
        },800,function(){
            $pph1.addClass('one',800,function(){
                $pph1.addClass('two',800)
            })
        })
        
    })

});
