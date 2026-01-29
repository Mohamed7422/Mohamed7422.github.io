// year
document.getElementById("year")?.appendChild(document.createTextNode(new Date().getFullYear()));

// copy email button
const copyBtn = document.getElementById("copyEmail");
copyBtn?.addEventListener("click", async () => {
  const email = "mohamedhesen0@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
  } catch {
    copyBtn.textContent = "Copy failed";
    setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
  }
});
