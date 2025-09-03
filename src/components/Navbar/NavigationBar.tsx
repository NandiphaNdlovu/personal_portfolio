import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Divider, Nav, Navbar } from "rsuite";
import { useState } from "react";

function LeftSection() {
  return (
    <div className="flex flex-col-3 items-center-safe h-full">
      {/* <Link className="nav-link" to="/">
        
      </Link> */}
      <Navbar.Brand href="/">
        <IoClose />
      </Navbar.Brand>
      <Divider vertical className="h-full w-fit" />
      <div
        className="flex items-center h-full gap-2"
        style={{ fontFamily: "bubblegums" }}
      >
        <h4 className="text-black">portfolio </h4>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="flex flex-row-2 gap-2 items-center ">
      <div>
        <p>Preview</p>
      </div>
      <MdRemoveRedEye />
    </div>
  );
}

export function NavigationBar({ ...props }) {
  const [active, setActive] = useState("home");
  return (
    <div className="bg-[url(./assets/img/banner-bg.png)] flex flex-cols-3 h-fit gap-6 justify-items-center items-center text-[#c58aec]">
      <div className="w-full pl-2">
        <LeftSection />
      </div>
      <div>
        <Nav
          className="bg-[url(./assets/img/banner-bg.png)]"
          appearance="pills"
          {...props}
          activeKey={active}
          onSelect={setActive}
          defaultActiveKey=" "
        >
          {/* {eventKey?.map((item, i) => (
            <Nav.Item key={i} eventKey={item} className="p-2">
              {item.toUpperCase()}
            </Nav.Item>
          ))} */}

          <Nav.Item as={Link} to={"/personal_portfolio/"} eventKey="home">
            Home
          </Nav.Item>
          {/* <Nav.Item as={Link} to={"/skills"} eventKey="skills">
            Skills
          </Nav.Item> */}
          <Nav.Menu
            title="Skills"
            className="bg-[url(./assets/img/banner-bg.png)]"
          >
            <Nav.Item as={Link} to={"skills/technical"} eventKey="technical">
              Technical Skills
            </Nav.Item>
            <Nav.Item as={Link} to={"skills/soft"} eventKey="soft">
              Soft Skills
            </Nav.Item>
          </Nav.Menu>
          <Nav.Item as={Link} to={"contact"} eventKey="contact">
            Contact
          </Nav.Item>
        </Nav>
      </div>
      <div className="flex w-full justify-end pr-2">
        <RightSection />
      </div>
    </div>
  );
}
