var result = document.getElementById("result")
function append(value) {
    result.value += value;
}
function clearscreen() {
    result.value = "";
}
function delchar() {
    result.value = result.value.slice(0, -1)
}
function calculate() {
    result.value = eval(result.value)
}