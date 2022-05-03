let firstValue;

for (let i of document.querySelectorAll('.numbers')) {
    i.addEventListener('click', function screenWrite() {
        document.getElementById("screen").textContent += i.textContent;
    });
}
document.getElementById('plus').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'не є числом'
        }
    }
}
document.getElementById('minus').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) - parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'не є числом'
        }
    }
}
document.getElementById('multiply').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) * parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'не є числом'
        }
    }
}
document.getElementById('divide').onclick = function () {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    document.getElementById('equals').onclick = function () {
        document.getElementById("screen").textContent = parseFloat(firstValue) / parseFloat(document.getElementById("screen").textContent);
        if (document.getElementById("screen").textContent == 'NaN') {
            document.getElementById("screen").textContent = 'Не є числом'
        }
    }
}
document.getElementById('reset').onclick = function () {
    document.getElementById("screen").textContent = "";
}
document.getElementById('dot').onclick = function () {
    document.getElementById("screen").textContent += '.';
}