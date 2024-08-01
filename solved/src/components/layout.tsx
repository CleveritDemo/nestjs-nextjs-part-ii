import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Button,
  Container,
  Content,
  Drawer,
  Footer,
  Header,
  Input,
  List,
  Nav,
  Navbar,
} from "rsuite";
import { useCartStore } from "../useCartStore";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation("common");
  const cart = useCartStore((state) => state.cart);
  const cartCount = useCartStore((state) => state.getCartQuantity());
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, cart }),
      });
      if (response.ok) {
        alert("Purchase successful!");
      } else {
        alert("Purchase failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Purchase failed!");
    }
  };

  return (
    <Container>
      <Header>
        <Navbar>
          <Navbar.Brand href="/">Karluiz</Navbar.Brand>
          <Nav>
            <Nav.Item href="/">{t("home")}</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item onClick={handleOpenDrawer}>
              <FaShoppingCart size={20} />
              <Badge
                content={cartCount}
                style={{ backgroundColor: "red", marginLeft: 2 }}
              />
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
      <Content>{children}</Content>
      <Footer
        style={{ position: "fixed", bottom: 0, width: "100%" }}
        className="p-4"
      >
        <p>© 2023 MyApp. {t("allRightsReserved")}</p>
      </Footer>
      <Drawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        placement="right"
        size="sm"
      >
        <Drawer.Header>
          <Drawer.Title>Shopping Cart</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <List
            style={{
              maxHeight: "calc(100vh - 280px)",
            }}
          >
            {cart.map((item, index) => (
              <List.Item key={index} index={index}>
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <Button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </List.Item>
            ))}
          </List>
        </Drawer.Body>
        <Footer
          style={{ position: "fixed", bottom: 0, width: "100%" }}
          className="p-4 bg-gray-100"
        >
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="Name" />
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="Email" />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
              )}
            />

            <Button type="submit" color="green" disabled={cartCount === 0}>
              Purchase
            </Button>
          </form>
        </Footer>
      </Drawer>
    </Container>
  );
};

export default Layout;
