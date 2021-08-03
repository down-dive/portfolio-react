const ContactForm = () => {
  return (
    <section id="contact" className="section-contact">
      <div className="row">
        <div className="u-margin-bottom-medium">
          <h2 className="heading-secondary">
            Contact Infomration
          </h2>
        </div>
        <div className='information'>
          <ul>
            <li><strong>Email:</strong> <a className='link' href="mailto:yterlyuk@gmail.com">yterlyuk@gmail.com</a></li>
            <li><strong>Github:</strong> <a className='link' href="https://github.com/down-dive">down-dive</a></li>
            <li>
              <strong>LinkedIn:</strong> <a className='link' href="www.linkedin.com/in/yevgeniya-terluyk-034013179">Yevgeniya Terlyuk</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
