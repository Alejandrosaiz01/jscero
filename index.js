function tranDivdedivisor(number) {
    var result = "";
    if (number % 3 === 0) {
        result += "Foo";
    }
    if (number % 5 === 0) {
        result += "Bar";
    }
    if (number % 7 === 0) {
        result += "Quix";
    }
    return result


}

function tranConatdenumeros(number) {
    var result = "";
    var j;
    number = number.toString().split("");
    for (j = 0; j < number.length; j += 1) {
        if (number[j] === "3") {
            result += "Foo";
        } else if (number[j] === "5") {
            result += "Bar";
        } else if (number[j] === "7") {
            result += "Quix";
        }
    }
    return result;
}

function tran(number) {
    var result = tranDivdedivisor(number) + tranConatdenumeros(number);
    if (result === "") {
        return number.toString();
    } else {
        return result;
    }

}



console.log(tran(85))

