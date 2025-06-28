const form   = document.getElementById('payment-form');
const loader = document.getElementById('loader-overlay');
const error  = document.getElementById('error-msg');
const inputs = [...document.querySelectorAll('.cc-input')];

inputs.forEach(inp =>
  inp.addEventListener('input', () => {
    inp.classList.remove('border-red-500');
    if (inputs.every(i => i.value.trim())) error.classList.add('hidden');
  })
);

form.addEventListener('submit', e => {
  e.preventDefault();

  const blanks = inputs.filter(i => !i.value.trim());
  if (blanks.length) {
    blanks.forEach(i => i.classList.add('border-red-500'));
    error.classList.remove('hidden');
    return;
  }

  error.classList.add('hidden');
  loader.classList.remove('hidden');

  setTimeout(() => {
    loader.classList.add('hidden');
    alert('✅ Payment successful! Thank you for your purchase.');

    inputs.forEach(i => {
      i.value = '';
      i.classList.remove('border-red-500');
    });
    document.getElementById('save-card').checked = false;
  }, 1200);
});

  const expInput = document.getElementById("cc-exp");

  expInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/[^0-9]/g, ""); // remove non-digits
    if (val.length >= 3) {
      val = val.slice(0, 2) + "/" + val.slice(2, 4);
    }
    e.target.value = val.slice(0, 5); // max 5 characters (MM/YY)
  });
  const ccInput = document.getElementById("cc-number");

  ccInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted.slice(0, 19); // max 19 chars
  });

