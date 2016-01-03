$(function(){
	
	var $imgScroll = $(".imgScroll");
	var $li= $imgScroll.find("ul li");
	var len = $li.size();
	var timer = null;
	var num = 0;
	var second = 3000;
	$li.each(function(i){
		$(this).css("z-index",len-i);
	});
	
	function scroll(fn){
		num++;
		if(num>len-1){
			num = 0;
		}
		fn(num);
	}
	function scrollMain(k){
		$imgScroll.find("div strong").eq(k).addClass("hover").siblings("strong").removeClass("hover")
		$li.eq(k).fadeIn().siblings("li").fadeOut();
		$imgScroll.find("ol li").eq(k).show().siblings("li").hide();
	}
	timer = setInterval(function(){
		scroll(scrollMain);
	},second);
	
	$imgScroll.mouseenter(function(){
		clearInterval(timer);
	});
	$imgScroll.mouseleave(function(){
		timer = setInterval(function(){
			scroll(scrollMain);
		},second);
	});
	
	$imgScroll.find("div strong").each(function(k){
		$(this).mouseenter(function(){
			num = k-1;
			scroll(scrollMain);
		});
	});
	
	//
	/*var timer1 = null
	var top1 = 0;
	timer1 = setInterval(function(){
		newsTop()
	},50);
	
	function newsTop(){
		var $li = $(".live ul li").eq(0);
		top1++;
		if(top1>=$li.height()){
			top1 = 0;
			$(".live ul li").css({"margin-top": 0})
			$li.parent().append($li);
		}else{
			$li.css({"margin-top": -top1+"px"})
		}
	}

	$(".live ul").mouseenter(function(){
		clearInterval(timer1);
	});
	$(".live ul").mouseleave(function(){
		timer1 = setInterval(function(){
			newsTop()
		},50);
	});*/
	
	
	
	//
	var $imgBox = $(".imgBox");
	var $imgBoxMain = $imgBox.find("div span");
	var len1 = $imgBoxMain.find("img").size();
	var wid = $imgBox.find("div").width();
	var num1 = 0;
	function imgBoxMain(){
		$imgBoxMain.stop(true,false).animate({"left":-num1*wid+"px"},600);
		$imgBox.siblings("ul").find("li").eq(num1).show().siblings("li").hide();
	}
	$imgBox.find(".prev").click(function(){
		num1--;
		if(num1<0){ num1 = len1-1;}
		imgBoxMain()
	});
	
	$imgBox.find(".next").click(function(){
		num1++;
		if(num1>len-2){ num1 = 0;}
		imgBoxMain()
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
