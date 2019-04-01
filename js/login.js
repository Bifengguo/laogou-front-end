var user = {
    student: {
        name : "狗同学",
        usercount : "123123",
        password : "123123"    
    },
    teacher: {
        name : "李老师",
        usercount : "asdasd",
        password : "asdasd"    
    }
}

function denglutiaozhuan(){
	var radio=document.getElementsByName("radio");
	/*var loginselect;
	var selectvalue;
	loginselect = document.getElementById("tiaozhuan");
	selectvalue = loginselect.value;*/
	
	if(radio[0].checked == true){
		window.location.href="http://localhost:8080/YibanLeaveSystem/YibanLeaveSystem/views/zqu/student/index.html#";
	}
	if(radio[1].checked == true){
		window.location.href="http://localhost:8080/YibanLeaveSystem/YibanLeaveSystem/views/zqu/teacher/jqgrid.html"
	}
		
}

/*$("#submitbutton").click(function(){debugger
    if ($("#username").val() === user.teacher.usercount || $("#username").val() === user.student.usercount) {
        if ($("#password").val() === user.teacher.password || $("#password").val() === user.student.password) {
            if ($("#username").val() === "asdasd") {
                //跳转到教工端
                window.location.href = "#";
            } else {
                //跳转到学生端
                window.location.href = "#";
            }
        } else {
            alert("密码不正确！");
        }
    } else {
        alert("用户账户不正确！");
    }

})*/

