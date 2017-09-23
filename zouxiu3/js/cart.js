$.ajax({
	type:"get",
	url:" http://datainfo.duapp.com/shopdata/getCar.php",
	dataType:'jsonp',
	data:{userID:2},
	async:true,
	success:function(data){	          
	         var num=0;       
	         var total=0; 
	         console.log(data)
	          data.map(function(item,i){        	  
	          	  total+=data[i].number*data[i].price
	          	  num+=parseInt(data[i].number) 
	          	  
	          	  $("#list").append(`<li count="${data[i].number}" id="${data[i].goodsID}" > <img src="${data[i].goodsListImg}" /> <p><span>${data[i].goodsName}</span>  <br/><span>单价:${data[i].price}</span> 	  
	          	  <br/><span>数量: <b id="reduce"> - </b>   ${data[i].number}  <b id="add"> + </b>  </span>
	          	  </p>  </li>`)
	          	  
	          	    	  	
	          })
	          
	          $('#list li').map(function(item){
	          	
	             if($(this).attr('count')<=0){
	             	
	             	console.log($(this).index())
	             	
	             	$('#list li').eq($(this).index()).remove()
	             	
	             }
	          })
	   
	          
	          var num1 = 0;
        
	          $('#reduce').click(function(){
	         var  goods=$(this).parent().parent().parent().attr("id")
	           	num1--;
	           console.log(goods)
	           $.ajax({
					type:"get",
					url:" http://datainfo.duapp.com/shopdata/updatecar.php",
					dataType:'json',
					data:{userID:2,goodsID:goods,number:num1},
					async:true,			
					success:function(data){ 
			       }       
			})			           	
 })         
 
           
	          $('#add').click(function(){
	         var  goods=$(this).parent().parent().parent().attr("id")
	           	num1++;
	           console.log(goods)
	           $.ajax({
					type:"get",
					url:" http://datainfo.duapp.com/shopdata/updatecar.php",
					dataType:'json',
					data:{userID:2,goodsID:goods,number:num1},
					async:true,			
					success:function(data){ 
			       }       
			})			           	
 })
	        
	          
	          if(data!=0){
	          	
	          	$("#nav1").append(`<div id="nav"> 商品数量:${num} 应付总额(不含运费):${total} </div>`)
	          	
//	          	
	          } 
	             
        }       
	})
