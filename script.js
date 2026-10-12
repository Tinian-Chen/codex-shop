const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

const form = document.querySelector('.reservation-form');
const message = document.querySelector('.form-message');
const dateField = form?.querySelector('input[type="date"]');
if (dateField) dateField.min = new Date().toISOString().slice(0, 10);
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const date = form.querySelector('input').value;
  message.textContent = date ? '已收到您的查询，我们将尽快为您确认座位。' : '请选择您的用餐日期。';
});
