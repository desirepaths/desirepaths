

thisURL = document.URL;



var str = thisURL.split('?')



$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:'jsonp',
	data:{goodsID:str[1]},
	async:true,
	success:function(data){
	    
	var arr =JSON.parse(Array.from(data)[0][5])
	
	


	
   
      $("#info").append( `<p>${data[0].goodsName}<br/>${data[0].price}<br/>购买人数: ${data[0].buynumber}</p>`)
	arr.map(function(item){
		
	            
                    $('.mui-slider-group').append(`<div class="mui-slider-item"><img src=${item}></div>`)
           })
        }       
	})




var num=0;

$("#add").click(function(){
	
	num++;
	
	$.ajax({
		type:"get",
		url:" http://datainfo.duapp.com/shopdata/updatecar.php",
		dataType:'json',
		data:{userID:2,goodsID:str[1],number:num},
		async:true,
		success:function(data){
	        
	        if(data==1){
	        	alert('添加成功')
	        }
       }       
})
})

