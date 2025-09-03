import { FaLinkedin, FaGithub } from "react-icons/fa";

export function PageFooter() {
  return (
    <footer className="pl-20 md:pl-2 flex flex-col-2 p-2 items-center justify-items-center ">
      <p className="w-full ">
        © 2023 Nandipha Ndlovu. All Rights Reserved. Remember, just like
        potatoes, creativity here is meant to be enjoyed, not mashed without
        permission!
      </p>

      <div className="flex flex-col-4 w-1/3 p-2 justify-self-end">
        <a
          className="w-1/4"
          href="https://www.linkedin.com/in/nandipha-bianca-ndlovu-954310265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbeD%2BlXS1QZ%2B5q2LzzOKQzw%3D%3D"
        >
          <FaLinkedin className="text-gray-800 hover:text-white" size={24} />
        </a>
        <a className="w-1/4" href="https://github.com/NandiphaNdlovu">
          <FaGithub className="text-gray-800 hover:text-white" size={24} />
        </a>
        {/* <a className="w-full" href="https://www.fiverr.com/s/j03kl7">
          <img src={navIcon3} alt="Icon" />
        </a> */}
      </div>
    </footer>
  );
}
