var timer = setTimeout(function(){
    $('.wrapper').addClass('wrapper-active')
},200)

$('.item').on('click',function(){
    $(this).addClass('active')
    $('.wrapper').addClass('open-img');
})

$('.close').on('click',function(e){
    e.stopPropagation()
    $('.active').removeClass('active')
    $('.wrapper').removeClass('open-img')
})