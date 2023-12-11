function myAlert(){
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function myStyle(){
    alert("FanciyShamncy!");
    document.getElementById("userText").style.fontWeight = "bold";
    document.getElementById("userText").style.color = "blue";
    document.getElementById("userText").style.textDecoration = "underline";
}

function removeStyle(){
    document.getElementById("userText").style.fontWeight = "normal";
    document.getElementById("userText").style.color = "";
    document.getElementById("userText").style.textDecoration = "";
    document.getElementById("userText").style.textTransform = "none"
}

function Moo(){
    document.getElementById("userText").style.textTransform = "uppercase";

    var myText = document.getElementById("userText").value;
    var mySplitText = myText.split(".");
    myText = mySplitText.join("-Moo");

    document.getElementById("userText").value = myText;
}
