/* eslint-disable react/no-unescaped-entities */
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xoqornjl");
  if (state.succeeded) {
    return (
      <p className="font-body text-white ">
        Merci de l'intérêt que vous portez à mon profil. Je vous recontacterai
        dans les plus brefs délais.
      </p>
    );
  }
  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <label htmlFor="email" className="font-body text-white mb-1">
        Votre Email
      </label>
      <input
        className=" pl-1 font-body text-black  rounded-sm mb-3"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        className="font-body text-white "
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className="font-body text-white mb-1">
        Votre message
      </label>
      <textarea
        className="font-body pl-1  text-black rounded-sm mb-3  "
        id="message"
        name="message"
      />
      <ValidationError
        className="font-body text-white "
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        className="font-body text-white bg-black rounded-lg "
        type="submit"
        disabled={state.submitting}
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
