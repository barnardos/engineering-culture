import React from "react";
import {
  Submit,
  Main,
  Hero,
  Title,
  Lede,
  Link,
  Paragraph,
  Heading
} from "@barnardos/components";

import Page from "../components/Page";

export default () => (
  <Page>
    <Main>
      <Hero>
        <Title>{`Engineering Culture`}</Title>
        <Lede>{`Engineering as a platform for delivering better outcomes to more children`}</Lede>
      </Hero>
      <Heading>{`Our culture, our values`}</Heading>
      <Paragraph>{`This document outlines the outlines and culture of the #FutureBarnardos engineering team.`}</Paragraph>
      <Paragraph>
        {`It is a living document. `}
        <Link href={`/`}>{`Changes are encouraged`}</Link>
      </Paragraph>
    </Main>
  </Page>
);
