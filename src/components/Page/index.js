import PropTypes from "prop-types";
import React from "react";
import { Footer, Header, Layout, SkipLink, Site } from "@barnardos/components";

const Page = ({ children }) => (
  <Site description="Barnardo’s Engineering Culture">
    <Layout>
      <SkipLink />
      <Header title="Go to the Engineering Culture homepage" />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
