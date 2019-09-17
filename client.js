var url = location.hash;
//var host = 'http://localhost/work/bogo/Affiliate-Checker/public/';
var host = 'https://afftrust.com/';
    $j(window).on('hashchange', function() {
        if(location.hash.match(/\#inbox\/(\w+)/)){
            $j('table.hX').append('<div><button class="save-email-content" style="padding: 10px; background-color: cornflowerblue; border: 0; color: #ffffff; cursor: pointer">Save Email Content</button></div>');
        }
        $j('.save-email-content').on('click',function() {
                // alert(location.hash);
                var mail_title = $j('h2.hP').text();
                var sender_name = $j('span.gD').text();
                var sender_mail = $j('span.go').text();
                var mail_content = $j('.adn.ads').html();
              /*  if (mail_title.indexOf('Fwd:'))
                {
                    var sender_gmail = $j('a[href^="mailto:"]').toString().split(':')[1];
                    var receiver_gmail = $j('a[href^="mailto:"]').eq(1).attr('href').split(':')[1];
                } else{*/

                let email_info = {
                    mail_title: mail_title,
                    sender_name: sender_name,
                    sender_mail: sender_mail,
                    mail_content: mail_content
                };
            var $path = host + 'save-email-content/insert';
            $j.ajax({
                url: $path,
                data: email_info,
                type: "POST",
                success: function (response) {
                    console.log(response);
                    if(response == 'true')
                    {
                        alert('Lưu nội dung gmail thành công !');
                    }else{
                        alert('Nội dung gmail đã được lưu từ trước !');
                    }
                }
            });

        });
    });