function loadData() {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            showTheLista(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "jogos.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
}

function showTheLista(xml) {

    var divjogos = document.getElementById('jogos');        // THE PARENT DIV.
    var Book_Lista = xml.getElementsByTagName('Lista');       // THE XML TAG NAME.

    for (var i = 0; i < Book_Lista.length; i++) {

        // CREATE CHILD DIVS INSIDE THE PARENT DIV.
        var divLeft = document.createElement('div');
        divLeft.className = 'col1';
        divLeft.innerHTML = Book_Lista[i].getElementsByTagName("Adversário")[0].childNodes[0].nodeValue;

        var divRight = document.createElement('div');
        divRight.className = 'col2';
        divRight.innerHTML = Book_Lista[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue;

        // ADD THE CHILD TO THE PARENT DIV.
        divjogos.appendChild(divLeft);
        divjogos.appendChild(divRight);
    }
};