function question() { 
    var name = document.getElementById("name").value;

    var question1 = document.querySelector('div.form input[name="quest1"]:checked');
    var question2 = document.querySelector('div.form input[name="quest2"]:checked');
    var question3 = document.querySelector('div.form input[name="quest3"]:checked');
    var question4 = document.querySelector('div.form input[name="quest4"]:checked');
    var question5 = document.querySelector('div.form input[name="quest5"]:checked');
    var question6 = document.querySelector('div.form input[name="quest6"]:checked');
    var question7 = document.querySelector('div.form input[name="quest7"]:checked');
    var question8 = document.querySelector('div.form input[name="quest8"]:checked');
    var question9 = document.querySelector('div.form input[name="quest9"]:checked');
    var question10 = document.querySelector('div.form input[name="quest10"]:checked');

    var percentage = 0; 

    if(name != ""){
        if(question1 != null || question2 != null || question3 != null || question4 != null || question5 != null || 
            question6 != null || question7 != null || question8 != null || question9 != null || question10 != null){
            if(question1.value == 1) {   
                percentage += 10;
            }
    
            if(question2.value == 1) {   
                percentage += 10;
            }
        
            if(question3.value == 1) {   
                percentage += 10;
            }
        
            if(question4.value == 1) {   
                percentage += 10;
            }
        
            if(question5.value == 1) {   
                percentage += 10;
            }
        
            if(question6.value == 1) {   
                percentage += 10;
            }
        
            if(question7.value == 1) {   
                percentage += 10;
            }
        
            if(question8.value == 1) {   
                percentage += 10;
            }
        
            if(question9.value == 1) {   
                percentage += 10;
            }
        
            if(question10.value == 1) {   
                percentage += 10;
            }
    
            document.getElementById("score").innerHTML = name + ", twój wynik to " + percentage + "%!";
        }else{
            document.getElementById("score").innerHTML = name + ", zaznacz wszystkie odpowiedzi!";
        }
    }else{
        document.getElementById("score").innerHTML = "Podaj swoje imie!";
    } 
} 