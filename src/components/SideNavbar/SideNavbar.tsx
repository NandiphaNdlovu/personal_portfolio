import { useState } from "react";
import { Nav, Sidenav } from "rsuite";
import { Link } from "react-router-dom";

import { BiHomeHeart } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";

export function SideNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  return (
    <div className="w-[200px] h-full flex">
      {/* <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      /> */}
      {/* <hr /> */}
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["home"]}
        className="relative h-full top-0 bg-[url(./assets/img/banner-bg.png)]"
      >
        <Sidenav.Toggle
          onToggle={(expanded) => setExpanded(expanded)}
          className="absolute bottom-0 w-full bg-background"
        />
        <Sidenav.Body className="bg-background">
          <Nav
            activeKey={activeKey}
            onSelect={setActiveKey}
            className="flex flex-col bg-background"
          >
            <Nav.Item
              className="bg-[url(./assets/img/banner-bg.png)]"
              as={Link}
              to={"/personal_portfolio/"}
              eventKey="home"
              icon={
                <span className="rs-icon">
                  <BiHomeHeart />
                </span>
              }
            >
              Home
            </Nav.Item>
            {/* <Nav.Item eventKey="skills" icon={<GiSkills />}>
              User Group
            </Nav.Item> */}
            <Nav.Menu
              className="nav-menu [&>.rs-nav-item-submenu]:bg-[url(./assets/img/banner-bg.png)]"
              placement="rightStart"
              eventKey="skills"
              title="Skills"
              icon={<GiSkills className="rs-icon" />}
            >
              <Nav.Item as={Link} to={"skills/technical"} eventKey="technical">
                Technical Skills
              </Nav.Item>
              <Nav.Item as={Link} to={"skills/soft"} eventKey="soft">
                Soft Skills
              </Nav.Item>
            </Nav.Menu>
            <Nav.Item
              className="bg-[url(./assets/img/banner-bg.png)]"
              as={Link}
              to={"contact"}
              eventKey="contact"
              icon={
                <span className="rs-icon ">
                  <SlScreenSmartphone />
                </span>
              }
            >
              Contact
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
