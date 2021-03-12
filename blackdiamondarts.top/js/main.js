$(document).ready(function(){

	let switchIndividualInModal = (checkClass) => {
		let modalBuy = $('#modal-buy')

		if (checkClass) {
			modalBuy.find('.modal-buy-form-individual__wrap').addClass('modal-buy-form-individual__wrap--open')
			modalBuy.find('.modal-buy-form-individual__calculate input').prop('required', true)
		} else {
			modalBuy.find('.modal-buy-form-individual__wrap').removeClass('modal-buy-form-individual__wrap--open')
			modalBuy.find('.modal-buy-form-individual__calculate input').prop('required', false)
		}
	}

	let priceSwitch = (index) =>{
		let price = '';
		switch (index) {
			case '20 x 40 см':
				price = '288 грн <span>499 грн</span>';
				break;
			case '30 х 60 см':
				price = '481 грн <span>699 грн</span>';
				break;
			case '40 х 80 см':
				price = '587 грн <span>899 грн</span>';
				break;
			case '60 х 120 см':
				price = '983 грн <span>1299 грн</span>';
				break;
			case '50 х 100 см':
				price = '682 грн <span>999 грн</span>';
				break;
			case '20 х 30 см':
				price = '288 грн <span>499 грн</span>';
				break;
			case '30 х 40 см':
				price = '362 грн <span>599 грн</span>';
				break;
			case '40 х 60 см':
				price = '512 грн <span>799 грн</span>';
				break;
			case '50 х 70 см':
				price = '587 грн <span>899 грн</span>';
				break;
			case '60 х 90 см':
				price = '682 грн <span>999 грн</span>';
				break;
			case '75 х 100 см':
				price = '983 грн <span>1499 грн</span>';
				break;
			case '90 х 120 см':
				price = '1271 грн <span>2099 грн</span>';                              
				break;
			case '70 х 140 см':
				price = '1271 грн <span>2099 грн</span>';
				break;
            case '3 картины 30 х 40 см':
				price = '787 грн <span>2099 грн</span>';
				break;    
            case '3 картины 40 х 60 см':
				price = '1072 грн <span>2099 грн</span>';
				break;    
            case '3 картины 50 х 70 см':
				price = '1274 грн <span>2099 грн</span>';
				break;    
            case '3 картины 60 х 90 см':
				price = '1563 грн <span>2099 грн</span>';
				break;    
            case '3 картины 75 х 100 см':
				price = '1966 грн <span>2099 грн</span>';
				break;       
            case '3 картины 90 х 120 см':
				price = '2542 грн <span>2099 грн</span>';
                console.log('herecase60120'); 
				break;       
 
			case 'Ваш размер':
				price = '0 грн.';
				break;
		}
		return price
	}

	let priceSwitchPromo = (index) =>{
		let price = '';
		switch (index) {
			case '20 x 40 см':
				price = '299 грн <span>499 грн</span>';
				break;
			case '30 х 60 см':
				price = '449 грн <span>699 грн</span>';
				break;
			case '40 х 80 см':
				price = '549 грн <span>899 грн</span>';
				break;
			case '60 х 120 см':
				price = '849 грн <span>1299 грн</span>';
				break;
			case '50 х 100 см*':
				price = '649 грн <span>1099 грн</span>';
				break;
			case '20 х 30 см':
				price = '299 грн <span>499 грн</span>';
				break;
			case '30 х 40 см':
				price = '399 грн <span>599 грн</span>';
				break;
			case '40 х 60 см':
				price = '449 грн <span>799 грн</span>';
				break;
			case '50 х 70 см':
				price = '549 грн <span>899 грн</span>';
				break;
			case '60 х 90 см':
				price = '649 грн <span>1099 грн</span>';
				break;
			case '75 х 100 см':
				price = '849 грн <span>1499 грн</span>';
				break;
			case '90 х 120 см':
				price = '999 грн <span>2099 грн</span>';            
				break;
			case '70 х 140 см':
				price = '999 грн <span>2099 грн</span>';
				break;
            case '3 картины 30 х 40 см':
				price = '787 грн <span>2099 грн</span>';
				break;    
            case '3 картины 40 х 60 см':
				price = '1072 грн <span>2099 грн</span>';
                console.log('herecase');
				break;    
            case '3 картины 50х70 см':
				price = '1274 грн <span>2099 грн</span>';
				break;    
            case '3 картины 60х90 см':
				price = '1563 грн <span>2099 грн</span>';
				break;    
            case '3 картины 75х100 см':
				price = '1966 грн <span>2099 грн</span>';
				break;       
            case '3 картины 90х120 см':
				price = '2542 грн <span>2099 грн</span>';
				break;     
  
			case 'Ваш размер':
				price = '0 грн.';
				break;
		}
		return price
	}

	/*parse UTM*/
	$.extend({
		getUrlVars: function(){
			let vars = [], hash, hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(let i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},
		getUrlVar: function(name){
			return $.getUrlVars()[name];
		}
	});
	let switchCategory = (index) =>{
		$('.section-catalog .tab__body > div').css({'display':'none'})
		$(`.section-catalog .tab__body > div[data-tab=${index}]`).css({'display':'block'})

		$('.section-catalog .tab__list li').removeClass()
		$(`.section-catalog .tab__list li[data-tab=${index}]`).addClass('active')
	}

	let categoryUTM = $.getUrlVar('utm_content'),
		UTMSource = $.getUrlVar('utm_source'),
		UTMMedium = $.getUrlVar('utm_medium'),
		UTMCampaign =  $.getUrlVar('utm_campaign'),
		UTMTerm =  $.getUrlVar('utm_term'),

		FullUTM = `${UTMSource}, ${UTMMedium}, ${UTMCampaign}, ${categoryUTM}, ${UTMTerm}`

	switch (categoryUTM) {
		case '1Money':
			switchCategory('2')
			break;
		case '1Motivation':
			switchCategory('3')
			break;
	}

	$('.lead-utm').val(FullUTM)

	/*init slider in modal*/
	let initSlider = (arrayImg) => {
		let sliderWrap = $('.modal-detailed-slider')
		sliderWrap.empty()
		sliderWrap.removeClass()
		sliderWrap.addClass('modal-detailed-slider')

		arrayImg.each(function (i, el) {
			console.log(el)
			sliderWrap.append(el)
		})

		sliderWrap.find('img').wrap('<div class="modal-detailed-slider__item"></div>')
		sliderWrap.slick()

	}
	$('.project__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.project__carusel',
	});

	/*FIX HOVER IPHONE*/
	document.addEventListener("touchstart", function(){}, true);


	/*anchor*/
	$('.anchor').on('click', function (e) {
		e.preventDefault();
		var $anchor = $(this).attr('href');
		var $stop = $($anchor).offset().top - 5;
		$('body,html').stop(true, true).animate({scrollTop: $stop}, 1000);
		return false;
	});

	/*adaptive*/

	$('.about-product-slider').slick({
		fade: true,
        dots: true
	})
    
    $('.my-picture--slider').slick({
        fade: true,
        dots: true
    })
    
    $('.section-tech--slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    })

	/*feedback*/
	$('.feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,

		centerMode: true,
		variableWidth: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode:false,
					variableWidth: false,
				},
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	/*tabClick*/
	$('.tab__list [data-tab]').on('click', function () {
		var $this = $(this);
		var $name = $this.data('tab');
		var $id = $this.closest('.tab__list').data('tab-id');
		var $idEl = $('.tab__body[data-tab-id="' + $id + '"]');

		$this.closest('.tab__list').find('[data-tab]').removeClass('active');
		$this.addClass('active');
		$idEl.find('[data-tab]').hide();
		$idEl.find('[data-tab="' + $name + '"]').show();
		$(window).trigger('resize').trigger('scroll');
	});

	/*change size and price product*/
	$('.catalog-item-content-info__size').on('click', function () {
		$(this).toggleClass('catalog-item-content-info__size--open')
	});

	let checkCalculateSize, checkCalculatePrice;
	$('.catalog-item-content-info__size ul li').on('click', function () {
        
		let size = $(this).children('span').text(),
            priceBlock = $(this).parent().parent().next(),
			checkPromo = $(this).parent().hasClass('price-promotion'), 
            price
        
		if (checkPromo){
			price = priceSwitchPromo(size)
           
		}else {
			price = priceSwitch(size)
		}

		$(this).parent().prev().html($(this).text())
        
		priceBlock.html(price)

		if ($(this).hasClass('catalog-item-content-info__calculate-my-size')) {
			switchIndividualInModal(true)
			getDataProduct($(this))
			checkCalculateSize = $(this).parent().prev()
			checkCalculatePrice = $(this).parent().parent().next()

			$('.modal-buy-form-individual__calculate input').val('')
			$('.modal-buy-form-individual__price span').text('0 грн.')
			$.fancybox.open({
				src: '#modal-buy'
			})
		}else {
			switchIndividualInModal(false)
		}
	})


	/*data details modal*/
	$('.catalog-item-content-btn__details, .catalog-item-img__gallery').on('click', function () {
		let productBlock = $(this).closest('.catalog-item__wrap'),
			modal = $('#modal-detailed'),
			title = productBlock.find('.catalog-item-content__title').text(),
			size = productBlock.find('.catalog-item-content-info__size > span').text(),
			price = productBlock.find('.catalog-item-content-info__price').html(),
			arrayImg = productBlock.find($('.catalog-item-img__hidden-photo img')).clone().add(productBlock.find('.catalog-item-img').children('img')).clone(),
			arrayLiSize = productBlock.find($('.catalog-item-content-info__size ul li')),
			modalDetailSize = $('.modal-detailed-size__choice'),
			modalDetailSizeUl = $('.modal-detailed-size__choice ul')

		console.log(arrayImg)

		checkCalculateSize = productBlock.find('.catalog-item-content-info__size span')
		checkCalculatePrice = productBlock.find('.catalog-item-content-info__price')

		modalDetailSizeUl.empty()

		arrayLiSize.each(function (i, el) {
			if ($(el).hasClass('catalog-item-content-info__calculate-my-size')){
				modalDetailSizeUl.append(`<li class="modal-detailed-size__calculate-my-size">${$(el).find('span').html()}</li>`)
			}else{
				modalDetailSizeUl.append(`<li>${$(el).find('span').html()}</li>`)
			}
		})

		initSlider(arrayImg)
		modal.find('.modal-detailed__title').text(title)
		modal.find('.modal-detailed-size__choice p').text(size)
		modal.find('.modal-detailed__price').html(price)
	})

	/*buy modal params*/
	let getDataProduct = (context) =>{
		let contentBlock = context.closest('.catalog-item-content'),
			img = contentBlock.prev().children('img').clone(),
			name = contentBlock.children('.catalog-item-content__title').text(),
			size = contentBlock.find('.catalog-item-content-info__size > span').text(),
			price = contentBlock.find('.catalog-item-content-info__price').html(),
			modal = $('#modal-buy')

		modal.find('.modal-buy-product__img').html(img)
		modal.find('.modal-buy-product-content__name').text(name)
		modal.find('.modal-buy-product-content__size').text(size)
		modal.find('.modal-buy-product-content__price').html(price)

		modal.find('.lead-form-product').val($.trim(name))
		modal.find('.lead-form-size').val($.trim(size))
		modal.find('.lead-form-price').val($.trim(price))
	}

	$('.catalog-item-content-btn__buy').on('click', function () {
		getDataProduct($(this))

		let checkSize = $(this).parent().prev().find('.catalog-item-content-info__size > span').html(),
			onCalculate = false

		checkCalculateSize = $(this).closest('.catalog-item__wrap').find('.catalog-item-content-info__size span')
		checkCalculatePrice = $(this).closest('.catalog-item__wrap').find('.catalog-item-content-info__price')

		if ($.trim(checkSize) === 'Ваш размер'){
			onCalculate = true
			$('.modal-buy-form-individual__calculate input').val('')
		}

		switchIndividualInModal(onCalculate)

	})


	/*buy in details modal*/
	let modalDetailsGetData = (context) =>{
		let contentBlock = context.closest('.modal-detailed__item'),
			name = contentBlock.find('.modal-detailed__title').text(),
			img = contentBlock.parent().prev().find('.modal-detailed-slider__item:nth-child(2) img').prop('src'),
			size = contentBlock.find('.modal-detailed-size__choice p').text(),
			price = contentBlock.find('.modal-detailed__price').html(),
			modal = $('#modal-buy')

		modal.find('.modal-buy-product-content__name').text(name)
		modal.find('.modal-buy-product__img img').prop('src', img)
		modal.find('.modal-buy-product-content__size').text(size)
		modal.find('.modal-buy-product-content__price').html(price)

		modal.find('.lead-form-product').val($.trim(name))
		modal.find('.lead-form-size').val($.trim(size))
		modal.find('.lead-form-price').val($.trim(price))
		$.fancybox.close()
		$.fancybox.open({
			src: '#modal-buy'
		})
	}

	$('.modal-detailed__buy .modal__btn').on('click', function () {
		let context = $(this)
		modalDetailsGetData(context)
		/*обнулити інпути якщо вибраний свій розмір*/
	})

	/*change size and price detailed modal*/
	$('.modal-detailed-size__choice').on('click', function () {
		$(this).toggleClass('modal-detailed-size__choice--open')
	});


	$('.modal-detailed-size__choice ul').delegate("li", 'click', function () {
		let size = $(this).text()

		$(this).parent().prev().text(size)
		let price = priceSwitch(size)
		$('.modal-detailed__price').html(price)

		if ($(this).hasClass('modal-detailed-size__calculate-my-size')) {
			$('.modal-buy-form-individual__calculate input').val('')
			$('.modal-buy-form-individual__price span').text('0 грн.')
			modalDetailsGetData($(this))
			switchIndividualInModal(true)
			$.fancybox.close()
			$.fancybox.open({
				src: '#modal-buy'
			})
		}else {
			switchIndividualInModal(false)
		}
	});

	/*modal calculate*/
	$('.modal-buy-form-individual__calculate input').on('keydown', function (event) {
		if ( (event.keyCode < 48 || event.keyCode  > 57) && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39){
			return false
		}else if ($(this).val().length >= 3 && (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39)) {
			return false
		}
		console.log('check down')

	}).on('keyup', function (event) {
		console.log('check up')
		let width = $(this).parent().parent().find('.modal-buy-form-individual__calculate:first input').val(),
			height = $(this).parent().parent().find('.modal-buy-form-individual__calculate:last input').val(),
			modalBuy = $('#modal-buy'),
			price = 0
		if (width !== '' && height !== ''){
			console.log(true)
			let size = (`${width} x ${height} см`)
			price = (parseInt(width) + parseInt(height)) * 5
			modalBuy.find('.modal-buy-product-content__price').text(`${price} грн.`)
			modalBuy.find('.modal-buy-form-individual__price span').text(`${price} грн.`)
			modalBuy.find('.modal-buy-product-content__size').text(size)
			modalBuy.find('.lead-form-size').val(size)
			modalBuy.find('.lead-form-price').val(price)
			console.log(checkCalculatePrice)
			console.log(checkCalculateSize)
			checkCalculatePrice.text(`${price} грн.`)
			checkCalculateSize.text(size)

		}else {
			modalBuy.find('.modal-buy-form-individual__price span').text('0 грн.')
			modalBuy.find('.modal-buy-product-content__price').text('0 грн.')
			modalBuy.find('.modal-buy-product-content__size').text('Введите размер')
			console.log(checkCalculatePrice)
			console.log(checkCalculateSize)
			checkCalculatePrice.text(`0 грн.`)
			checkCalculateSize.text('Ваш размер')
			/*checkCalculateSize.text('Введите размер')*/
		}
	})

	/*individual picture*/
	$('.my-picture-content-calculator__item input').on('keydown', function (event) {
		if ( (event.keyCode < 48 || event.keyCode  > 57) && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39){
			console.log(true)
			return false
		}else if (context.val().length >= 3 && (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39)) {
			console.log(true)
			return false
		}
	})
	$('.my-picture-content-btn .global-btn').on('click', function () {
		let sum = 0, error = false, priceBlock= $('.my-picture-content-calculator__price')

		$('.my-picture-content-calculator__item input').each(function (i, el) {
			let InputVal = $(el).val()
			if (InputVal === ''){
				$(el).addClass('my-picture-content-calculator__item-error')
				error = true
			}else{
				$(el).removeClass('my-picture-content-calculator__item-error')
				sum = sum + parseInt(InputVal)
			}
		})

		if (error === false){
			console.log(sum)
			priceBlock.html(`${sum * 5} грн`)
		}else {
			priceBlock.html('Введите размер')
		}
	})

	
	/*individual picture modal*/
	$('.my-picture-content-btn__btn').on('click', function () {
		let error = false, inputBlocks = $('.my-picture-content-calculator__item'),
			modalBuy = $('#modal-buy')

		inputBlocks.each(function (i, el) {
			let input = $(el).find('input'),
				valueInput = input.val()

			if (valueInput === '') {
				console.log('pysto')
				error = true
				input.addClass('my-picture-content-calculator__item-error')
			}else if ($(el).hasClass('my-picture-content-calculator__item-error')) {
				error = true
			}
		})

		console.log(error)

		if (error === false){
			inputBlocks.find('input').removeClass('my-picture-content-calculator__item-error')

			let inputBlock = $(this).parent().prev(),
				height = parseInt(inputBlock.find('input:first').val()),
				width = parseInt(inputBlock.find('input:last').val()),
				img = inputBlock.parent().prev().children('img').prop('src'),
				size =  `${height} x ${width}`,

				cost = (height + width) * 6.50 + 'грн'

			$('.my-picture-content-calculator__price').text(cost)


			modalBuy.find('.modal-buy-product-content__name').text('Индивидуальный заказ')
			modalBuy.find('.modal-buy-product__img img').prop('src', img)
			modalBuy.find('.modal-buy-product-content__size').text(size)
			modalBuy.find('.modal-buy-product-content__price').html(cost)

			modalBuy.find('.lead-form-product').val('Индивидуальный заказ')
			modalBuy.find('.lead-form-size').val(size)
			modalBuy.find('.lead-form-price').val(cost)

			$.fancybox.open({
				src: '#modal-buy'
			})
		}else {
			$('.my-picture-content-calculator__price').text('Введите размер')
		}
	})

	/*validate form*/
	$('.js-form-validate').on('click',function () {
		let form__validate = $(this).closest('form')[0];
		form__validate = form__validate.checkValidity();
		if (form__validate === true){
			$(this).css('display','none');
			$(this).next().css('display','inline-block');
		}
	});
});