function setup() {
    img.src = '{% static "images/listening.png" %}';
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    
    speechRec.start();

    function gotSpeech() {
        collectedSpeech = speechRec.resultString;
        thisString = collectedSpeech.toLowerCase();
        console.log(thisString);
        even_odd += 1;
        if (thisString === 'hello' || thisString === 'hi') {
            img.src = '{% static "signImages/Hello.jpg" %}';
        }
        else if (thisString==='assalamu alaikum') {
            img.src = '{% static "signImages/assalamu_alaikum.jpg" %}';            
        }
        else if (thisString==='no') {
            img.src = '{% static "signImages/No.jpg" %}';            
        }
        else if (thisString==='yes') {
          img.src = '{% static "signImages/yes_by_rifat.jpg" %}';      
        }
        else if (thisString==='thank you') {
            img.src = '{% static "signImages/thankYou_by_rifat.jfif" %}';            
        }
        else if (thisString==='family') {
            img.src = '{% static "signImages/Family.jpg" %}';            
        }
        else if (thisString==='please') {
          img.src = '{% static "signImages/please_by_rifat.jfif" %}';            
        }
        else if (thisString==='help') {
          img.src = '{% static "signImages/Help.jpg" %}';            
        }
        else {
          record_btn.click();
        }
    }
}
