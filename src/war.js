function printToTextArea(output) {
    let terminal = document.getElementById("myTerminal");
    terminal.innerHTML = output;
}

function processText() {
    let terminalInput = document.getElementById("terminalInput");
    let terminalOutput = document.getElementById("terminalOutput");
    let myCommand = terminalInput.value;
    terminalOutput.innerHTML += myCommand;
    terminalInput.value = "";
}

function onTerminalInputKeyPress(e) {
    if(e.key == "Enter")
    {
        processText();
    }
}

