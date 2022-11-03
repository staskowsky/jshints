import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Content, Page } from "../src/components/Containers.styled";
import { Contents } from "../src/pages/Contents.page";
import { Selectors } from "../src/pages/Selectors.page";
import { Webstorage } from "../src/pages/Webstorage.page";

export const Subpages = ["webstorage", "selectors"];

const Index: NextPage = () => {
  const [selectedSubpage, setSelectedSubpage] = useState("content");
  return (
    <Page>
      <Head>
        <title>js hints app</title>
      </Head>
      <Content>
        <Contents setSelectedSubpage={setSelectedSubpage} />
        {selectedSubpage === "webstorage" && <Webstorage />}
        {selectedSubpage === "selectors" && <Selectors />}
      </Content>
    </Page>
  );
};

export default Index;
