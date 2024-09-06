import React from "react";
import { Content, Footer, Header, Nav, Navbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header>
        <Navbar>
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          <Nav>
            <Nav.Item href="/">Home</Nav.Item>
            <Nav.Item href="/about">About</Nav.Item>
          </Nav>
        </Navbar>
      </Header>
      <Content style={{ flex: "1" }} className="p-4">
        {children}
      </Content>
      <Footer style={{ marginTop: "auto" }} className="p-4">
        <p>© 2023 MyApp. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default Layout;
