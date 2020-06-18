//let today = new Date();
//let year = today.getFullYear();
//let month = today.getMonth()+1;
//let date = today.getDate();
//let day = today.getDay();
$(".left").click(function(){location.reload();})

        //todoList 받아오기
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
				
                str += "<div class = 'block'><div><input type='checkbox' id='ch'><label for = 'ch'></label></div>";
                str += "<div>"+list[i].con_content+"</div>";
                str += "</div>";
                
				 if(list[i].con_status == 1){
	                  $(".todocontent").html(str);
	  				console.log("todo 상태값은 ="+list[i].con_status);
	              }else if(list[i].con_status == 2){
	                  $(".doingcontent").html(str);
	  				console.log("doing 상태값은 ="+list[i].con_status);
	  				if(list[i+1].con_status != 2 || null)
	  					var str = "";
	              }else if(list[i].con_status == 3){
	                  $(".donecontent").html(str);
	  				console.log("done 상태값은 ="+list[i].con_status);
	  				if(list[i+1].con_status != 3 || null)
	  					var str = "";
	              }
			}
		});
	}
});
//$(function(){
//    var pl = $(".pl");

//    	//todo 입력하기(보내주기)
//    	function todoWrite(param, callback){
//	        $.ajax({
//	            type: 'post',
//	            url: '/todo', 
//	            data: JSON.stringify(param),
//	            contentType: "application/json; charset = utf-8",
//	            success: function(){
//	                console.log("todo가 입력되었습니다.");
//	                if(error){
//	                    error(err);
//	                }
//	            },
//	                error: function(xhr, status, err){
//	                	console.log("todo 입력오류");
//	                	if(error){
//	                		error(err);
//	                	}
//	                }
//	        });
//    	}
        

    
//        //todo Delete하기
//        function todoDelete(con_num, callback){
//        	$.ajax({
//        		type: 'delete', 
//        		url: '/todo'+con_num,
//        		success: function(result){
//        			console.log("todo삭제됨");
//        			if(callback){
//        				callback(result);
//        			}
//        		},
//        		error : function(){
//        			console.log("todo 삭제 실패");
//        		}
//        	});
//        }
        
//        //-----------------------------------------------------------------------------
//        
//        //todo에서 > 눌렀을 때(상태를 1에서 2로 변경해준다)
//        todo.on("click", function(){
//        	var checked = $("input[name=selected]:checked");
//        	var con_status;
//        	
//        	console.log(con_status);
//        	if(data.con_status == "1"){
//        		({
//        			con_status:2
//        		})
//        	}else if(data.con_status == "2"){
//        		({
//        			con_status:3
//        		})
//        	}else if(data.con_status == "3"){
//        			
//        	}
//        });
//
//        //Doing에서 > 눌렀을 때
//        //Done에서  - 눌렀을 때 
//        
        //todoList 출력
//        <div class = "block"><div><input type="checkbox" id="ch"><label for = "ch"></label></div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at pretium tortor.</div></div>
//        <div class = "block"><div><input type="checkbox" id="ch"><label for = "ch"></label></div><div>Duis fermentum tempus posuere. Vivamus condimentum suscipit aliquam.</div></div>
//        <div class = "block"><div><input type="checkbox" id="ch"><label for = "ch"></label></div><div>Aliquam id leo at elit tincidunt consequat. Duis pretium magna eget bibendum scelerisque.</div></div>
//      function showList(date) { 
//    	  var defaultdate = new Date();
//    	  var calendar = defaultdate.getFullYear() + (defaultdate.getMonth()+1) + defaultdate.getDate();
//          todoList({
//        	 date : date ||  calendar
//          },function(list){
//              var str = "";
//              if(list == null || list.length == 0) {
//                  return;
//              }
//              console.log(list);
//              console.log(calendar);
//              
//              for(var i = 0; i < list.length; i++) {
//            	  if(list[i].con_status == 1){
//                  str += "<div class = 'block'><div><input type='checkbox' id='ch'><label for = 'ch'></label></div>";
//                  str += "<div>"+list[i].con_content+"</div>";
//                  str += "</div>";
//                  $(".todocontent").html(str);
//              }else if(list[i].con_status == 2){
//            	  str += "<div class = 'block'><div><input type='checkbox' id='ch'><label for = 'ch'></label></div>";
//                  str += "<div>"+list[i].con_content+"</div>";
//                  str += "</div>";
//                  $(".doingcontent").html(str);
//              }else if(list[i].con_status == 3){
//            	  str += "<div class = 'block'><div><input type='checkbox' id='ch'><label for = 'ch'></label></div>";
//                  str += "<div>"+list[i].con_content+"</div>";
//                  str += "</div>";
//                  $(".donecontent").html(str);
//              }
//              }
//          });
//      }
//      
//    //+이미지를 클릭햇을 때(작성버튼 눌렀을 때)
//    pl.click(function(){
//        var con_content = $("#con_content").val();
//
//        if(con_content == ""){
//            alert("내용을 입력해주세요.");
//            $("#con_content").focus();
//            return;
//        }else{
//            todoList({
//                "con_content" : con_content,
//                "con_status" : 1
//            }, function(e){
//            alert("작성되었습니다.");
//            location.reload();
//            })
//        }
//    });
//
//});