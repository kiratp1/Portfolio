/**
 * INTERACTIVE DEVELOPER TERMINAL SIMULATOR
 * Hero Section Code Preview for Kirat Popli Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const config = window.PORTFOLIO_CONFIG;
  const terminalData = config ? config.terminalData : null;

  if (!terminalData) return;

  startTerminalSimulation(terminalBody, terminalData);
});

function startTerminalSimulation(container, data) {
  container.innerHTML = ''; // Clear container

  // Create Header Command Prompt
  const cmdLine = document.createElement('div');
  cmdLine.className = 'terminal-cmd-line';
  cmdLine.innerHTML = `<span class="terminal-prompt">kirat@mits-pc:~$</span> <span class="terminal-cmd" id="typing-cmd"></span><span class="terminal-cursor"></span>`;
  container.appendChild(cmdLine);

  const typingTarget = document.getElementById('typing-cmd');
  const commandText = data.command || "g++ kirat_profile.cpp -o profile && ./profile";

  let index = 0;

  function typeChar() {
    if (index < commandText.length) {
      typingTarget.textContent += commandText.charAt(index);
      index++;
      setTimeout(typeChar, 45);
    } else {
      // Finished typing command, reveal execution output lines after short delay
      setTimeout(() => {
        revealOutputLines(container, data.outputLines || []);
      }, 400);
    }
  }

  // Start typing command after 600ms
  setTimeout(typeChar, 600);
}

function revealOutputLines(container, lines) {
  const outputDiv = document.createElement('div');
  outputDiv.className = 'terminal-output';
  container.appendChild(outputDiv);

  lines.forEach((lineText, lineIdx) => {
    setTimeout(() => {
      const lineEl = document.createElement('div');
      lineEl.className = 'terminal-output-line';
      lineEl.style.color = getLineColor(lineIdx);
      lineEl.textContent = lineText;
      outputDiv.appendChild(lineEl);
    }, lineIdx * 250);
  });
}

function getLineColor(index) {
  const colors = ['#38bdf8', '#a5b4fc', '#34d399', '#fef08a', '#818cf8'];
  return colors[index % colors.length];
}
