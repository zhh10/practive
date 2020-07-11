function bindEvent(){
    $('#submit').on('click',function(){
        var val = $('#inp').val()
        if(val){
            rendom('mine',val);
            $('#inp').val('')；
            $.ajax({
                url:'https://developer.duyiedu.com/edu/turing/chat',
                data:{
                    text:val,
                },
                type:'get',
                success:function(res){
                    res = JSON.parse(res) 
                    rendom('robot',res.text)
                }
            })
            
        }
    })

    $(document).on('keyup',function(e){
        if(e.keyCode == 13){
            var val = $('#inp').val()
            if(val){
                rendom('mine',val);
                $('#inp').val('')
                $.ajax({
                    url:'https://developer.duyiedu.com/edu/turing/chat',
                    data:{
                        text:val,
                    },
                    type:'get',
                    success:function(res){
                        res = JSON.parse(res)
                        rendom('robot',res.text)
                    }
                })
            }
            
        }
    })
}

function rendom(type,content){
    var div = $('<div></div>').addClass(type);
    var logo = $('<div></div>').addClass('logo');
    var text = $('<div></div>').addClass('text').text(content);
    console.log(text)
    logo.appendTo(div);
    text.appendTo(div);
    $('.content').append(div);

    var scrollHeight = $('.content')[0].scrollHeight;
    var innerHeight = $('.content').innerHeight();
    var distance = scrollHeight - innerHeight;
    $('.content').scrollTop(distance);
}



bindEvent()