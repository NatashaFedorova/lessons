const form = document.querySelector('[data-practice-form]');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
   e.preventDefault();
   const form = [{}];

   const formData = new FormData(e.currentTarget);

   for (const [key, value] of formData) {
      form[0][key] = value;
   }

   console.log(form);
   e.currentTarget.reset();
}
