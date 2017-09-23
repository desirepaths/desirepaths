


      
$('#btn').click(function(){
	    
	    $.ajax({
	    	type:'get',
	    	async:true,
	    	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
	    	dataType:'json',
	    	data:{status:'register',userID:$('#name').val(),password:$('#password').val()},
	    	success:function(message){
	    		if(message == 0){
	    			alert('用户已注册')
	    			
	    		}else{
	    			alert('注册成功')
	    			location.href='index.html'
	    		}
	    		
	    	}
	    })


})


