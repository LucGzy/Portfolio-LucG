import ContactForm from "./ContactFrom";
function Footer() {
  return (
    <footer className="flex flex-row w-full justify-around pt-16">
      <div className="flex flex-col w-[36%]">
        <h1 className="font-body mb-5 text-white text-lg ">Contact Me</h1>
        <ContactForm />
      </div>

      <div className="flex flex-col">
        <h3 className="font-body  text-white mb-5 text-lg">Quick Links</h3>
        <ul>
          <li className="mb-5">
            <a className="font-body text-white underline" href="/#Info-Block">
              About
            </a>
          </li>
          <li className="mb-5">
            <a className="font-body text-white underline" href="/#Project-grid">
              Projects
            </a>
          </li>
          <li className="mb-5">
            <a
              className="font-body text-white underline"
              href="https://www.linkedin.com/in/luc-gouzy-1698a21b5/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="mb-5">
            <a
              className="font-body text-white underline"
              href="https://github.com/Likzy/"
              target="blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
