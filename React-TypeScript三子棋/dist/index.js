class User {
    constructor(id, pwd, age, name) {
        this.id = id;
        this.pwd = pwd;
        this.age = age;
        this.name = name;
    }
}
function getData(obj, prop) {
    console.log(obj[prop]);
}
const u = new User('123', '1234565', 18, 'uzi');
getData(u, 'id');
