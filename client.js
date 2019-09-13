window.onload=function () {
    var url      = location.hash;
    $(window).on('hashchange', function() {
        if(location.hash.match(/\#inbox\/(\w+)/)){
            // alert(location.hash);
            $('.G-tF').append('<div><button class="save-email-content">Save Email Content</button></div>');
        }
        $('document').delegate('.save-email-content','click',function() {
            alert('123');
        });
    });

};