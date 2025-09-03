import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export function PageFooter() {
  return (
    <footer className="footer">
      <p>
        © 2023 Nandipha Ndlovu. All Rights Reserved. Remember, just like
        potatoes, creativity here is meant to be enjoyed, not mashed without
        permission!
      </p>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/nandipha-bianca-ndlovu-954310265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbeD%2BlXS1QZ%2B5q2LzzOKQzw%3D%3D">
          <img src={navIcon1} alt="Icon" />
        </a>
        <a href="https://github.com/NandiphaNdlovu">
          <img src={navIcon2} alt="Icon" />
        </a>
        <a href="https://www.fiverr.com/s/j03kl7">
          <img src={navIcon3} alt="Icon" />
        </a>
      </div>
    </footer>
  );
}
