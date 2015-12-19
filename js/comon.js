
var $menu = document.getElementById("l_menu"),
	$a = $menu.getElementsByTagName("a"),
	len = $a.length,
	num = 0;
	for (var i=0;i<len;i++) {
		$a[i].index = i;
		if($a[i].className == "hover"){
			num = $a[i].index;
		}
		$a[i].onmouseenter = function(){
			this.className = "hover";
		};
		$a[i].onmouseleave = function(){
			if(this.index != num){
				this.className = "";
			}
		}
	}