
// import { validateEmail } from '../../utils/helpers';

// import "./style.css"

// function ContactForm() {

//     // JSX
//     return (
//         <section>
//           <h1>Contact me</h1>
//           <form id="contact-form">
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input type="text" name="name" />
//             </div>
//             <div>
//               <label htmlFor="email">Email address:</label>
//               <input type="email" name="email" />
//             </div>
//             <div>
//               <label htmlFor="message">Message:</label>
//               <textarea name="message" rows="5" />
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </section>
//         );
//     }


// export default ContactForm;
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

// const ContactForm = () => {
//   const { register, errors, handleSubmit, reset } = useForm();

//   const toastifySuccess = () => {
//     toast('Form sent!', {
//       position: 'bottom-right',
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       className: 'submit-feedback success',
//       toastId: 'notifyToast'
//     });
//   };

//   const onSubmit = async (data) => {
//     // Send form email
//     try {
//       const templateParams = {
//         name: data.name,
//         email: data.email,
//         subject: data.subject,
//         message: data.message
//       };

//       await emailjs.send(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_USER_ID
//       );

//       reset();
//       toastifySuccess();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className='ContactForm'>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12 text-center'>
//             <div className='contactForm'>
//               <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
//                 {/* Row 1 of form */}
//                 <div className='row formRow'>
//                   <div className='col-6'>
//                   <input {...register('name', { required: true })} > </input>
//                     {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
//                   </div>
//                   <div className='col-6'>
//                   <input {...register('name', { required: true })} > </input>
//                     {errors.email && (
//                       <span className='errorMessage'>Please enter a valid email address</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 2 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                   <input {...register('name', { required: true })} > </input>
//                     {errors.subject && (
//                       <span className='errorMessage'>{errors.subject.message}</span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Row 3 of form */}
//                 <div className='row formRow'>
//                   <div className='col'>
//                   <textarea {...register('name', { required: true })} > </textarea>
//                     {errors.message && <span className='errorMessage'>Please enter a message</span>}
//                   </div>
//                 </div>
//                 <button className='submit-btn' type='submit'>
//                   Submit
//                 </button>
//               </form>
//             </div>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    console.log('I was clicked')
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    // <section className='contact-section'> 
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" required />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>
    // </section>

    <section id="contact" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Contact
                </h2>
              </div>

              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full name" id="name" required />
                  <label for="name" className="form__label">Full name</label>
                                </div>

                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Email address" id="email" required />
                    <label for="email" className="form__label">Email address</label>
                                </div>
                            </form>
                  </div>
                </div>
              </div>
            </section>
            );
};

            export default ContactForm;
