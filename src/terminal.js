let terminal = document.getElementById("terminalOutput");

function printToTextArea(output) {
    terminal.innerHTML = output;
}

function processText() {
    let terminalInput = document.getElementById("terminalInput");
    let myCommand = terminalInput.value;
    terminal.innerHTML += myCommand;
    terminalInput.value = "";
}

function onTerminalInputKeyPress(e) {
    if(e.key == "Enter")
    {
        processText();
    }
}

function initializeTerminal() {
    terminal.innerHTML = "Welcome\n> ";
}

initializeTerminal();
