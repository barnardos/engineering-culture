import React from "react";
import {
  Submit,
  BulletedList,
  ListItem,
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
        {`This is a living document. `}
        <Link
          href={`https://github.com/barnardos/engineering-culture`}
        >{`Changes are encouraged`}</Link>
        {`.`}
      </Paragraph>
      <Paragraph>{`This document is high level by design, more practical guidance will be found in our Digital Playbook`}</Paragraph>
      <Heading>{`Open`}</Heading>
      <Paragraph>{`We default to openness:`}</Paragraph>
      <BulletedList>
        <ListItem>{`code in the open`}</ListItem>
        <ListItem>{`prefer open source code to closed source`}</ListItem>
        <ListItem>{`contribute back`}</ListItem>
        <ListItem>{`communicate openly`}</ListItem>
        <ListItem>{`build transparency into our systems`}</ListItem>
      </BulletedList>
      <Heading>{`Honest`}</Heading>
      <Paragraph>{`We speak our truth:`}</Paragraph>
      <BulletedList>
        <ListItem>{`face uncomfortable problems`}</ListItem>
        <ListItem>{`give clear feedback`}</ListItem>
        <ListItem>{`own up to mistakes`}</ListItem>
      </BulletedList>
      <Heading>{`Clear`}</Heading>
      <Paragraph>{`We work with clarity:`}</Paragraph>
      <BulletedList>
        <ListItem>{`share with clear intent`}</ListItem>
        <ListItem>{`write clear code, not smart code`}</ListItem>
        <ListItem>{`code and talk in human first`}</ListItem>
      </BulletedList>
      <Heading>{`Calm`}</Heading>
      <Paragraph>{`We instil calmness in the organisation:`}</Paragraph>
      <BulletedList>
        <ListItem>{`engineer away surprises`}</ListItem>
        <ListItem>{`take time to consider the impact of our actions`}</ListItem>
        <ListItem>{`think before we code`}</ListItem>
      </BulletedList>
      <Heading>{`Listen`}</Heading>
      <Paragraph>{`We do not know best:`}</Paragraph>
      <BulletedList>
        <ListItem>{`listen once, then listen again`}</ListItem>
        <ListItem>{`seek clarity before comitting`}</ListItem>
        <ListItem>{`write code that can respond to feedback`}</ListItem>
      </BulletedList>
    </Main>
  </Page>
);
