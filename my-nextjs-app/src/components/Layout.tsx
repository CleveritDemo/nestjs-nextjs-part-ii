// src/components/Layout.tsx
import React from 'react';
import { Container, Header, Content, Footer, Navbar, Nav, Badge } from 'rsuite';
import useTranslation from 'next-translate/useTranslation';
import { useCartStore } from '../store/useCartStore';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation('common');
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <Container>
      <Header>
        <Navbar>
          <Nav>
            <Nav.Item href="#">Brand</Nav.Item>
            <Nav.Item href="/">{t('home')}</Nav.Item>
            <Nav.Item href="/about">{t('about')}</Nav.Item>
            <Nav.Item href="/contact">{t('contact')}</Nav.Item>
            <Nav.Item href="/cart">
              {t('cart')} <Badge content={totalItems} />
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        <p>{t('footer')}</p>
      </Footer>
    </Container>
  );
};

export default Layout;