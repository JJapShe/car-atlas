const panel = document.querySelector("#installPanel");
const button = document.querySelector("#installButton");
const help = document.querySelector("#installDialog");
let pendingPrompt = null;

panel.hidden = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  pendingPrompt = event;
  document.querySelector("#installStatus").textContent = "설치 버튼을 누르면 브라우저의 설치 창이 열려요.";
});
window.addEventListener("appinstalled", () => { pendingPrompt = null; panel.hidden = true; help.close(); });
button.addEventListener("click", async () => {
  if (!pendingPrompt) { help.showModal(); return; }
  const prompt = pendingPrompt;
  pendingPrompt = null;
  button.disabled = true;
  try {
    await prompt.prompt();
    await prompt.userChoice;
  } catch { help.showModal(); }
  finally {
    button.disabled = false;
    document.querySelector("#installStatus").textContent = "설치는 브라우저 메뉴에서도 할 수 있어요.";
  }
});
document.querySelector("#installClose").addEventListener("click", () => help.close());
help.addEventListener("close", () => { if (!panel.hidden) button.focus(); });
