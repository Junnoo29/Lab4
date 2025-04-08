
function pustoTu(zmienna) {
    var dlugosc = zmienna.length;
    if (dlugosc === 0) {
        return true;
    } else {
        return false;
    }
} 
function poprawnyAdres(adres) {
    let email_form = /[a-zA-Z_0-9\.]+@[a-zA Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if (email_form.test(adres))
        return true;
    else {
        alert("Adres e-mail jest niepoprawny");
        return false;
    }
}



function bialeZnaki(string) {
    return string.trim().length === 0;
   }

   function walidujNapis(ciag, komunikat) {
    if (pustoTu(ciag)) {
        alert(komunikat);
        return false;
    } else {
        if (bialeZnaki(ciag)) {
            alert(komunikat);
            return false;
        } else {
            return true;
        }
    }
}

function weryfikacja(){
    var formularz = document.forms["user_data"];
    for (var i = 0; i < formularz.length; i++) {        
        walidujNapis(formularz[i].value,"Uzupełnij pole: " + formularz[i].name
        )      
    }
        poprawnyAdres(formularz['email'].value)      
}


