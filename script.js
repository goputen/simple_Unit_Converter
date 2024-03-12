function converter() {
    let input = document.getElementById('input-unit').value;
    let uIn = document.getElementById('select-input').value;
    let uOut = document.getElementById('select-output').value;
    let output = document.getElementById('output-unit').value
    if (uIn == "km" && uOut == "kmo") {
        document.getElementById('output-unit').value = (input * 1)
    }
    if (uIn == "km" && uOut == "mo") {
        document.getElementById('output-unit').value = (input * 1000)
    }
    if (uIn == "km" && uOut == "cmo") {
        document.getElementById('output-unit').value = (input * 1000 * 100)
    }
    if (uIn == "m" && uOut == "kmo") {
        document.getElementById('output-unit').value = (input / 1000)
    }
    if (uIn == "m" && uOut == "mo") {
        document.getElementById('output-unit').value = (input * 1)
    }
    if (uIn == "m" && uOut == "cmo") {
        document.getElementById('output-unit').value = (input * 100)
    }
    if (uIn == "cm" && uOut == "kmo") {
        document.getElementById('output-unit').value = (input / (1000 * 100))
    }
    if (uIn == "cm" && uOut == "mo") {
        document.getElementById('output-unit').value = (input / 100)
    }
    if (uIn == "cm" && uOut == "cmo") {
        document.getElementById('output-unit').value = (input * 1)
    }
}
