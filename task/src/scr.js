document.getElementById("upper-case").addEventListener("click", function (){
    let text = document.getElementById("area").value;
    document.getElementById("area").value = text.toUpperCase();
})
document.getElementById("lower-case").addEventListener("click", function (){
    let text = document.getElementById("area").value;
    document.getElementById("area").value = text.toLowerCase();
})
document.getElementById("proper-case").addEventListener("click", function (){
    let text = document.getElementById("area").value;
    let space = " ";
    let split = text.split(space);
    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
    }
    for (let i = 0; i < split.length; i++) {
        split[i]=capitalizeFirstLetter(split[i]);
    }
    document.getElementById("area").value=split.join(space);
})
document.getElementById("sentence-case").addEventListener("click",function (){
    let text = document.getElementById("area").value;
    let dot = ". ";
    let split = text.split(dot);
    function capitalizeFirstLetterSentence(string){
        return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
    }
    for (let i = 0; i < split.length; i++) {
        split[i]=capitalizeFirstLetterSentence(split[i]);
    }
    document.getElementById("area").value=split.join(dot);
})
document.getElementById("save-text-file").addEventListener("click", function (){
    let text = document.getElementById("area").value;
    download("text.txt", text);
})
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}