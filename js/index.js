    $(document).ready(function() {
    	$(document).on('click', '#submit', function() {
    		var $submitedColors = $('#color').serialize();
    		var $colors = $submitedColors.split("&");
    		var $resultArray = [];
    		var $list = '';
    		$.each($colors, function($key, $favcolor){
    			var $color = $favcolor.split("=");
    			$resultArray[$key] = $color[1];
    		});

    		$.shuffle($resultArray);
    		$nb = 1;
    		$.each($resultArray, function($arrkey, $resultColor){
    			$list += '<li><img src="'+$resultColor+'.png" class="ui-li-icon"></li>';
    			$nb++;
    		});
    		$("#form").hide();
    		$("#result").show();
    		$("#ulresult").append($list);
    	});

    	$("#again").click(function(){
    		$("#ulresult").empty();
    		$("#result").hide();
    		$("#form").show();
    	});

    }); 

    (function($){
    	$.shuffle = function(arr) {
    		var i = arr.length, j, temp;
    		if ( i == 0 ) return;
    		while ( --i ) {
    			j = Math.floor( Math.random() * ( i + 1 ) );
    			temp = arr[i];
    			arr[i] = arr[j];
    			arr[j] = temp;
    		}
    		return arr;
    	}
    })(jQuery);