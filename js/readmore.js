$(document).ready(function(){ 


           var showChar = 150;
           var moretext = "more";
           var lesstext = "less";
           var content = $(".more").text();

           if(content.length > showChar) 
           {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar-1, content.length - showChar);

                var html = c + '<span><a href="" class="morelink">'+moretext+'</a></span>';

                $(".more").html(html);
                $('.morecontent').hide();
            }

        $(".morelink").click(function()
        {
            if($(this).hasClass("less")) 
            {
                $('.more').remove(h);
                $(this).removeClass("less");
                $(this).html(moretext);
            } 
            else 
            {
                $('.more').append(h);
                $(this).addClass("less");
                $(this).html(lesstext);
            }

            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });

});