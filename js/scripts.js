$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Рекомендуем
	if ($('.recommend .swiper-container').length) {
		let slides = $('.recommend .swiper-container .slide').length

		new Swiper('.recommend .swiper-container', {
			loop: slides > 1 ? true : false,
			speed: 500,
			spaceBetween: 18,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Карусель товаров
	if ($('section.products .swiper-container').length) {
		new Swiper('section.products .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Товар в избранное
	$('.product .favorite .btn, .product_info .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в корзину
	$('.product .btns .buy_btn, .product_info .buy_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в сравнение
	$('.product .btns .compare_btn, .product_info .compare_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Сравнение товаров
	if ($('.compare_info .products .swiper-container').length) {
		new Swiper('.compare_info .products .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			scrollbar: {
				el: '.compare-swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						compareHeight()
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						compareHeight()
					})
				}
			}
		})
	}


	// Боковая колонка - фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10000,
		from: 1500,
		to: 6000,
		step: 1,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .price_range input.to').val().replace(/\s+/g, ''))
		})
	})


	$('.filter .reset_btn').click(function () {
		$('.filter input').removeAttr('checked')

		$priceRange.reset()
	})


	// Карусель изображений
	if ($('.gallery .swiper-container').length) {
		new Swiper('.gallery .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.item').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.item').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs.swiper-container', {
			loop: false,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 4
				},
				768: {
					spaceBetween: 15,
					slidesPerView: 4
				}
			}
		})

		const productSlider = new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Страница товара - Моб. размеры
	$('.product_info .data .size .mob_size_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.product_info .data .size .items').slideToggle()
	})


	// Страница списка товаров - Моб. размеры
	$('.products .list .product .data .mob_size_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.product')

		$(this).toggleClass('active')
		parent.find('.data .sizes').slideToggle()
	})


	// Аккордион
	$('body').on('click', '.accordion .item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Фиксация заголовков столбцов списка товаров
	$('.products .titles').stick_in_parent()


	// Отправка форм
	$('body').on('submit', '.form.custom_submit', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#success_modal',
			type: 'inline',
			touch: false,
			afterShow: (instance, current) => {
				setTimeout(() => {
					$.fancybox.close()
				}, 3000)
			}
		})
	})


	$('body').on('submit', '.subscribe form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#subscribe_success_modal',
			type: 'inline',
			touch: false
		})
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



// Выравнивание в сравнении
function compareHeight() {
	$('.compare_info .compare_features .list > *').height('auto')
	$('.compare_info .product_features .list > *').height('auto')

	let productFeatures = $('.compare_info .product_features'),
		compareFeatures = $('.compare_info .compare_features'),
		sizes = new Object()

	productFeatures.each(function () {
		$(this).find('.list > *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	compareFeatures.each(function () {
		$(this).find('.list > *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(sizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.list > *:eq(' + key + ')').innerHeight(data)
		})

		$('.compare_info .compare_features .list > *:eq(' + key + ')').innerHeight(data)
	})
}



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.product_name').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.product_name'))

		start = start + step
		finish = finish + step
	})
}