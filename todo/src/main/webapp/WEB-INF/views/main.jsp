<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Todo List</title>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
</head>
<body>
    <!--모든 프레임 묶어주기-->
    <div class="container">
        <div class="top">
            <div class="left"><strong>TodoList</strong></div>
        </div>
        <div class="navbar">
            <div class="searchbar">
                <input id = "search" type="text" value = "Add a Todo">
                <img src = "../resources/img/plus.png" class = "pl">
            </div>
            <table>
                <td>
                    <button class ="Lbutton" type = "button">&lt;</button>
                </td>
                <td>
                    <span class="day"></span><br>
                    <span class="month"></span>
                </td>
                <td>
                    <span class="day"></span><br>
                    <span class="month"></span>
                </td>
                <td class = "today">
                    <span class="day"></span><br>
                    <span class="month"></span>
                </td>
                <td>
                    <span class="day"></span><br>
                    <span class="month"></span>
                </td>
                <td>
                    <span class="day"></span><br>
                    <span class="month"></span>
                </td>
                <td class="td">
                    <button class ="Rbutton" type = "button">&gt;</button>
                </td>
            </table>
        </div>
        <!--본문 영역-->
        <div class = "main">
            <div class = "first">
                <div class = "wrap">
                    <div class = "todo">
                        <strong>Todo</strong>
                    </div>
                    <div class = "bd">
                        <div class = "todocontent">
                                
                        </div>
                    </div>
                    <div class = "add">
                        <button id = "gt">&gt;</button>
                    </div>
                </div>
            </div>
            <div class = "second">
                <div class = "wrap">
                    <div class = "doing">
                        <strong>Doing</strong>
                    </div>
                    <div class = "bd">
                        <div class = "doingcontent">
                            
                    </div>
                    </div>
                    <div class = "add">
                        <button id = "gt">&gt;</button>
                    </div>
                </div>
            </div>
            <div class = "third">
                <div class = "wrap">
                    <div class = "done">
                        <strong>Done</strong>
                    </div>
                    <div class = "bd">
                        <div class = "donecontent">
                           
                    </div>
                    </div>
                    <div class = "add">
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div class = "footer">Copyright @ 2020 HongYeJin Todolist</div>
        </div>
        </div>
    <script type="text/javascript" src="../resources/js/main.js"></script>
</body>
<link href="../resources/css/main.css" rel="stylesheet" />
</html>