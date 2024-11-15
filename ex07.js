// ex07.js

function isNationalIDValid(name, age, zip, password) {
	if(name != ""){
        return true;
    } else if(age > 18 || age < 65){
        return true;
    } else if(zip < 99999 && zip > 0){
        return true;
    } else if(password != "qwerty" || password != "azerty" || password != "1234"){
        return true;
    } else {
        return false;
    }
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true