 // ----- SIMPLE TAB SWITCHER + SHOW / HIDE CARD SECTION -----
  const tabs       = document.querySelectorAll('#tabs .tab-btn');
  const panes      = document.querySelectorAll('.tab-pane');
  const cardBlock  = document.getElementById('cardSection');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      /* 1. mark active tab ---------------------------------- */
      tabs.forEach(b => b.classList.remove('border-blue-600', 'text-blue-600'));
      btn.classList.add('border-blue-600', 'text-blue-600');

      /* 2. show correct pane -------------------------------- */
      const target = btn.dataset.tab;          // "credit" | "paypal" | "qr"
      panes.forEach(p => {
        p.classList.toggle('hidden', p.id !== `tab-${target}`);
      });

      /* 3. hide card gallery when QR is chosen -------------- */
      if (target === 'qr') {
        cardBlock.classList.add('hidden');
      } else {
        cardBlock.classList.remove('hidden');
      }
    });
  });