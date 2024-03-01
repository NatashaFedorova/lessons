function onSubmit(e) {
   e.preventDefault();
   const form = [{}];

   const formData = new FormData(e.currentTarget);

   for (const [key, value] of formData) {
      form[0][key] = value;
   }

   console.log('form:', form);
   e.currentTarget.reset();
}

export default onSubmit;
