import { ReactComponent as SocialGithub } from '../assets/social/github.svg';
import { GITHUB } from '../components/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <hr />
        <div>Copyright ©  2021 Website and Artwork designed and created by</div>
        <span>
          <a href={ GITHUB } target="_blank" rel="noreferrer">Ina Chen</a>
        </span>
        <div className="footer__links">
          <a href={ GITHUB } target="_blank" rel="noreferrer">
            <SocialGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
