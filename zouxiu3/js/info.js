$.ajax({
	type:"get",
	url:" http://datainfo.duapp.com/shopdata/getuser.php",
	dataType:'jsonp',
	async:true,
	data:{userID:2},
	success:function(data){
	
	 console.log(data)
	 
	 
	 $("#person").append(`<dl><dt><img src="${data[0].userimg_url}"> </dt>  <dd>昵称:${data[0].userID}</dd>
	              <dd>sex:${data[0].sex}</dd>
	           
	 </dl>`)
	}
});