
$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:'jsonp',
	async:true,
	success:function(data){
	data.map(function(item){
		
		$("#list").append('<li id='+item[0]+'>'+'<img src='+item[3]+'>'+'<p>'+item[2]+'</p>'+'</li>')
           
           
           
         dianji()
	})
		
	}
});



function dianji(){

	$("#list li").click(function(){
	
		location.href='detail.html?'+$(this).attr('id');
	
 })
}