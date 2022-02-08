class First {
    Hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    Hello() {
        super.Hello()
        console.log("А я наследуемый метод!");
    }
}

const second = new Second

second.Hello()