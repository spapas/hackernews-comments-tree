var plus_elem = '<span style="color:red; weight: bold; font-size:1.3em;" class="plus">+</span>';

$('tr .comtr').each(function(n) {
    var that = $(this);
    that.data('hidden', false);
    
    that.click(function() {
        var hidden = $(this).data('hidden');
        var mywidth = $('.ind img', this).attr('width')*1;
        
        if(hidden) {
            $(this).data('hidden', false);
            $('.comhead .plus', this).remove();
            $(this).nextAll().each(function(x) {
                
                var width = $('.ind img', this).attr('width')*1;
                
                if(width <= mywidth) {
                   return false;
                } else {
                    $('.comhead .plus', this).remove();
                    $(this).data('hidden', false);
                    $(this).show();
                }
            });
        } else {
            var nextwidth = $('.ind img',$(this).next()).attr('width')*1;
            //console.log(nextwidth, mywidth);
            if(nextwidth <= mywidth ) {
                return;
            }
                
            $(this).data('hidden', true);
            $('.comhead', this).append(plus_elem);
            
            $(this).nextAll().each(function(x) {
                var width = $('.ind img', this).attr('width');
                if(width <= mywidth) {
                   return false;
                } else {
                    $(this).data('hidden', true);
                    $(this).hide();
                    if($('.comhead .plus', this).length == 0) {
                        $('.comhead', this).append(plus_elem);
                    }
                }
               
            });
        }
    });
});