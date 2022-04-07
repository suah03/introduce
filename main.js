window.onload = function () {
    b1.onclick = function() {
        name = prompt("이름을 입력하세요.");
        document.getElementsByClassName("name")[0].innerHTML = "name : " + name;

    };
    b2.onclick = function() {
        Number = prompt("전화번호를 입력하세요.");
        document.getElementsByClassName("number")[0].innerHTML = "number : " +  Number;

    };
    b3.onclick = function() {
        Age = prompt("나이를 입력하세요.");
        document.getElementsByClassName("age")[0].innerHTML = "age : " + Age;

    };
    b4.onclick = function() {
        Addr = prompt("주소를 입력하세요.");
        document.getElementsByClassName("addr")[0].innerHTML = "addr : " + Addr;

    };
    b5.onclick = function() {
       Mbti = prompt("mbti를 입력하세요.");
        document.getElementsByClassName("mbti")[0].innerHTML = "mbti : " + Mbti;

    };
    
};