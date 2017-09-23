$(".login").click(function(){

        $.ajax({
	    	type:'get',
	    	async:true,
	    	url:' http://datainfo.duapp.com/shopdata/userinfo.php',
	    	dataType:'json',
	    	data:{status:'login',userID:$('#name').val(),password:$('#password').val()},
	    	success:function(message){
	    		if(message == 0){
	    			alert('密码错误')
	    			
	    			
	    		}
	    		if(message == 2){
	    			alert('用户名密码不符')
	    			
	    		}
	    		else{
	    			location.href='index.html';
	    			
	    		}
	    		
	    	}
	    })

})


