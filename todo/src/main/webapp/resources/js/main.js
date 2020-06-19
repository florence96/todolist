//let today = new Date();
//let year = today.getFullYear();
//let month = today.getMonth()+1;
//let date = today.getDate();
//let day = today.getDay();
$(".left").click(function(){location.reload();})

//todoList 받아오기 AJAX
var todoService = (function(){
        function todoList(param, callback){
        	$.getJSON("/todo", function(data){
        		if(callback){
        			callback(data.list);
        		}
        	}).fail(function(xhr, status, err){
				if(error){
					error();
				}
        	});
        }
        return{
        	todoList : todoList,
        }
})();

//List 받아오기 jquery
$(document).ready(function() {
	
	var con_content;
	var con_status;
	
	showList();
	
	function showList(){

		todoService.todoList({
		}, function(list){
			
			var str = "";
			
			if(list == null || list.length == 0) {
				return;
			}
			for(var i = 0, len = list.length || 0; i < len; i++){
				
                str += "<div class = 'block'><div><input type='checkbox' id="+list[i].con_num+" name = 'ck' value = "+list[i].con_num+"><label for = "+list[i].con_num+"></label></div>";
                str += "<div>"+list[i].con_content+"</div>";
                str += "</div>";
                
				 if(list[i].con_status == 3){
	                  $(".donecontent").html(str);
	  				console.log("done 상태값은 ="+list[i].con_status);
	  				if(list[i+1].con_status !=3)
	  					str = "";
	              }else if(list[i].con_status == 2){
	                  $(".doingcontent").html(str);
	  				console.log("doing 상태값은 ="+list[i].con_status);
	  				if(list[i+1].con_status !=2)
	  					str = "";
	              }else if(list[i].con_status == 1){
	                  $(".todocontent").html(str);
	  				console.log("todo 상태값은 ="+list[i].con_status);
	              }
			}
		});
	}
});
//------------------------------------------------------------------------------------
    	//todo 입력하기(보내주기) AJAX
    	function todoWrite(param, callback, error){
	        $.ajax({
	            url: '/todo', 
	            data: JSON.stringify(param),
	            contentType: "application/json; charset = utf-8",
	            cache : false,
	            async : true,
	            type   : "POST",
	            success: function(){
	                console.log("todo가 입력되었습니다.");
	                if(callback){
	                   	callback(result);
	                }
	            },
	                error: function(xhr, status, err){
	                	console.log("todo 입력오류");
	                	if(error){
	                		error(err);
	                	}
	                }
	        });
    	}
    	//todo 입력하기(보내주기) jquery
    	var plus = $(".pl");
    	
    	plus.click(function(){
    		
    		var con_content = $("#addatodo").val();
    		
    		if(con_content == ""){
    			alert("내용을 입력해주세요.");
    			$("#addatodo").focus();
    			return;
    		}
    		
    		var con = confirm("내용을 등록하시겠습니까?");
    		if(con){
    			todoWrite({
    				"con_content": con_content,
    				"con_status": 1,
    			}, function(result){
    				alert("내용이 등록되었습니다.");
    			})
    			location.reload();
    		}else{
    			alert("내용 등록이 실패하였습니다. 다시 시도해주세요.");
    			return;
    		}
});
//-------------------------------------------------------------------------
    	
   //content > 버튼 눌렀을 때 수정하기 ajax
    	function todoUpdate(param, callback, error){
    		$.ajax({
    			type : 'PUT',
    			url : '/todo',
    			data: JSON.stringify(param),
    			contentType : "application/json; charset = utf-8",
    			success : function(result, status, xhr){
    				if(callback){
    					callback(result);
    				}
    			},
    			error : function(xhr, status, err){
    				if(error){
    					error(err);
    				}
    			}
    		});
    	}
    	
    	var todoButton = $("#gt1");
    	
    	todoButton.click(function(){
    		
    		if($("input:checkbox[name = 'ck']:checked").length == 0){
    			alert("선택한 내용이 없습니다.");
    		}
    		else if($("input:checkbox[name = 'ck']:checked").length == 1){
        		var con_num = $("input:checkbox[name='ck']:checked").val();
        		
        		console.log("체크된 valeu값은 "+con_num);
        		
        		todoUpdate({
        			"con_status" : 2,
        			"con_num" : con_num,
        		}, function(result){
        		})
        		alert("상태가 doing으로 변경되었습니다.");
        		location.reload();
        		
    		}else{
    			alert("한개만 선택해주세요.");
    		}
    	});
    	
    		var doingButton = $("#gt2");
        	
        	doingButton.click(function(){
        		
        		if($("input:checkbox[name = 'ck']:checked").length == 0){
        			alert("선택한 내용이 없습니다.");
        		}
        		else if($("input:checkbox[name = 'ck']:checked").length == 1){
            		var con_num = $("input:checkbox[name='ck']:checked").val();
            		
            		console.log("체크된 valeu값은 "+con_num);
            		
            		todoUpdate({
            			"con_status" : 3,
            			"con_num" : con_num,
            		}, function(result){
            		})
        			alert("상태가 done으로 변경되었습니다.");
            		location.reload();
            		
        		}else{
        			alert("두 개 이상 선택하실 수 없습니다.");
        		}
    	});

//-----------------------------------------------------------------------------------------------
        	//todoDelete ajax부분
        	function todoDelete(con_num) {
    			$.ajax({
    				type : 'DELETE',
    				url : '/todo/'+con_num,
    				contentType : "application/json; charset=utf-8",
    				dataType: "json",
    				data : JSON.stringify(con_num),
    				success : function(result) {
    					console.log("todo가 삭제되었습니다");
    					if(callback) {
    						callback(result);
    					}
    				},
    				error : function() {
    					console.log("todo의 삭제를 실패하였습니다.");
    				}
    			});
    		}
        	
        	var delButton = $("#del");
        	
        	delButton.click(function(){
        		if($("input:checkbox[name = 'ck']:checked").length == 0){
        			alert("선택한 내용이 없습니다.");
        		}
        		else if($("input:checkbox[name = 'ck']:checked").length == 1){
        			if(confirm("삭제하시겠습니까?")){
	            		var con_num = $("input:checkbox[name='ck']:checked").val();
	            		console.log("삭제될때 값 "+con_num);
	            		todoDelete(con_num, function(result){
	            		})
        			}
        			alert("삭제되었습니다.");
        		}else{
        			alert("두 개 이상 선택하실 수 없습니다.");
        		}
    			location.reload();
        	});
        	