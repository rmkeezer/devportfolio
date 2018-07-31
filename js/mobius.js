(function($) {

    $('#contact-form').submit(function(e){
        e.preventDefault();
        spinner = '<i class="fa fa-gear fa-spin" style="font-size:36px; color:white;"></i>';
        $('#results').html(spinner);
        $.ajax({
            url:'http://98.192.12.55:5000/',
            type:'post',
            crossDomain: true,
            data:$('#url-form').serialize(),
            success:function(data){
                console.log(data);
                results = '<a class="btn btn-light" href="#">MIDI download</a>';
                results += '&nbsp;&nbsp;'
                results += '<a class="btn btn-light" href="#">PDF download</a>';
                $('#results').html(results);
                //whatever you wanna do after the form is successfully submitted
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('POST failed.');
            }
        });
    });

})(jQuery);