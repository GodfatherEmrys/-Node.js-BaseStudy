/* 가상으로 require() 함수를 정의해보면 require() 함수가 내부적으로 처리되는 방식을 이해할 수 있다. */
var require = function(path){
    var exports = {
        getUser: function() {
            return { id: 'test01', name: 'Emrys' };
        },
        group: { id: 'group01', name: 'Friend' }
    }
    return exports;
}

var user = require('...');

function showUser() {
    return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보: %s', showUser());