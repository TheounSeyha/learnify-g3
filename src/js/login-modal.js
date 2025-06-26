/* src/js/login-modal.js */
export function setupLoginModal() {
  const loginModal     = document.getElementById("loginModal");
  const registerModal  = document.getElementById("registerModal");
  if (!loginModal || !registerModal) {
    console.warn("Modal HTML not in DOM yet.");
    return;
  }

  /* helpers */
  const openLogin    = () => loginModal.classList.remove("hidden");
  const closeLogin   = () => loginModal.classList.add("hidden");
  const openRegister = () => { closeLogin(); registerModal.classList.remove("hidden"); };
  const closeRegister= () => registerModal.classList.add("hidden");

  /* triggers */
  document.getElementById("openLoginModal")?.addEventListener("click", e => { e.preventDefault(); openLogin(); });
  document.getElementById("closeLogin")    ?.addEventListener("click", closeLogin);
  document.getElementById("closeRegister") ?.addEventListener("click", closeRegister);
  document.getElementById("goToRegister")  ?.addEventListener("click", e => { e.preventDefault(); openRegister(); });
  document.getElementById("goToLogin")     ?.addEventListener("click",   e => { e.preventDefault(); openLogin();   });

  /* backdrop click closes whichever is open */
  document.getElementById("backdrop")?.addEventListener("click", () => { closeLogin(); closeRegister(); });

  /* Esc key */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeLogin(); closeRegister(); }
  });
}
