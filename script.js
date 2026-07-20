function analyzeMatch() {
    let score = Math.floor(Math.random() * 30) + 70;
    document.getElementById("result").innerHTML =
        "Confidence Score: " + score + "%";
}