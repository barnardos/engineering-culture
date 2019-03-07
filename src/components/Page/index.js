import PropTypes from "prop-types";
import React from "react";
import { Footer, Header, Layout, SkipLink, Site } from "@barnardos/components";

const Page = ({ children }) => (
  <Site description="<Your product description>">
    <Layout>
      <SkipLink />
      <Header title="Go to the <your product name> homepage" />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
