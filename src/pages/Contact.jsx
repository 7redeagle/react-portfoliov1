import { ReactComponent as ContactSvg } from '../assets/contact.svg';

const Contact = () => {
  return (
    <div className="contact__form pure-g">
      <form class="contact__form pure-u-1 pure-u-xl-1-2" method="POST" action="https://formsubmit.co/521c6e8f4c94579ad2c52af3a373cebe">
        <input type="text" name="_honey" style={{display: "none"}}/>
        <input type="hidden" name="_next" value="https://portfolio.ainchn.com"/>
        <div class="contact__entry">
          <input class="contact__input" type="text" name="name" placeholder=" " required="required"/>
          <label class="contact__label">Full Name</label>
        </div>
        <div class="contact__entry">
          <input class="contact__input" type="email" name="email" placeholder=" " required="required"/>
          <label class="contact__label">Email </label>
        </div>
        <div class="contact__entry">
          <textarea class="contact__input contact__input--text" type="message" name="message" placeholder=" " required="required"></textarea>
          <label class="contact__label">Write me a message...</label>
        </div>
        <div class="contact__submit">
          <input class="btn btn--pink-border" id="submit" name="submit" type="submit" value="SUBMIT"/>
        </div>
      </form>
      <div className="contact__image pure-u-1 pure-u-xl-1-2">
        <ContactSvg />
      </div>
    </div>
  )
}

export default Contact;
