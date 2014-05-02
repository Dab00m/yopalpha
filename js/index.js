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
    			var $sufix = $nb === 1 ? 'st' : ($nb === 2 ? 'nd' : 'th');
    			$list += '<li class="ui-li-has-thumb ui-last-child"><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#"><img src="'+$resultColor+'.png" class="ui-li-icon"><h3>'+$resultColor+' <b>'+$nb+'</b>'+$sufix+'</h3></a></li>';
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

    	$("#reset").click(function(){
    		$.each($("#color"), function($key, $value){
    			$value.reset();
    		});
    	});

    	$("#submitplayer").click(function(){
    		var $fullname = "";
    		var $nickname = "";
    		var $email = "";
    		var $color = "";
    		$addnewplayerform = $("#addnewplayer").serializeArray();
    		$.each($addnewplayerform, function($playerKey, $playerValue){
    			$.each($playerValue, function($key, $value) {
    				switch($value) {
    					case "fullname":
    						$fkey = $key + 1;
    						$fullname = $playerValue["value"];
    						break;
    					case "nickname":
    						$nickname = $playerValue["value"];
    						break;
    					case"email":
    						$email = $playerValue["value"];
    						break;
						case"color-1":
    						$color = $playerValue["value"];
    						break;
    					default:
    						break;
    				}
    			});
    		});

    		alert("Fullname:" + $fullname+" Nickname:" + $nickname + " Email "+ $email+ " Color "+$color);
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