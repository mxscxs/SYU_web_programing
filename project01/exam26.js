const c = require("ansi-colors");

function hello(name) {
    console.log(c.red(name)+"님 안녕하세요.");
}

hello("홍길동");
//ansi-colors: 콘솔에서 글자색 또는 배경색을 바꿔줄 수 있는 기능을 제공하는 모듈 