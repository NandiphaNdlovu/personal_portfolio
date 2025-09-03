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
      <div className="flex items-center h-full text-gray-400 gap-2">
        <h4 className="text-black">Form: </h4>
        <p>Some description</p>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div className="flex flex-row-2 gap-2 text-gray-400 items-center">
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
    <div className="border border-neutral-400 bg-white flex flex-cols-3 h-fit gap-6 justify-items-center items-center">
      <div className="w-full pl-2">
        <LeftSection />
      </div>
      <div>
        <Nav
          appearance="pills"
          {...props}
          activeKey={active}
          onSelect={setActive}
          defaultActiveKey="home"
        >
          {/* {eventKey?.map((item, i) => (
            <Nav.Item key={i} eventKey={item} className="p-2">
              {item.toUpperCase()}
            </Nav.Item>
          ))} */}

          <Nav.Item as={Link} to={"/fields"} eventKey="/field">
            Field
          </Nav.Item>
          <Nav.Item as={Link} to={"/workflow"} eventKey="workflow">
            Workflow
          </Nav.Item>
          <Nav.Item as={Link} to={"/permissions"} eventKey="permissions">
            Permissions
          </Nav.Item>
          {/* <Nav.Menu icon={<EllipsisHIcon />} title="more...">
            <Nav.Item icon={<DropboxIcon />}>dropbox</Nav.Item>
            <Nav.Item icon={<FirefoxIcon />}>firefox</Nav.Item>
          </Nav.Menu> */}
        </Nav>
      </div>
      <div className="flex w-full justify-end pr-2">
        <RightSection />
      </div>
    </div>
  );
}
