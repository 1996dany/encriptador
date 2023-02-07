const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");

encryptBtn.addEventListener("click", function() {
  let text = inputText.value;
  text = text.toLowerCase();
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  outputText.value = text;
});

decryptBtn.addEventListener("click", function() {
  let text = outputText.value;
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  outputText.value = text;
});

copyBtn.addEventListener("click", function() {
  outputText.select();
  document.execCommand("copy");
});