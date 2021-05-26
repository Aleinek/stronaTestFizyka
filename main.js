function name() {
    var name = document.getElementById("name").value;
}

function question() {
    var percentage = 0;
    var id = 1;
    var questname = "quest"+id;

    for (let step = 0; step < 10; step++) {
        if(document.getElementById(questname).value = 1)
        {
            percentage += 10;
            id ++;

            alert(percentage);
        }
      }
}