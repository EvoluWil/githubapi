import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  FirstSection,
  HomeContainer,
  HomeContent,
  SecondSection,
  TextContent,
} from "../ui/styles/page/index.style";
import { InfoHomeCard } from "ui/components/InfoHomeCard/InfoHomeCard";
import { HeaderHome } from "ui/components/HeaderHome/HeaderHome";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [session] = useSession();
  const route = useRouter();
  useEffect(() => {
    if (session?.userName) {
      route.push(`/${session?.userName as string}`);
    }
  }, [session]);

  return (
    <>
      <HomeContainer>
        <HeaderHome />
        <HomeContent>
          <FirstSection>
            <TextContent>
              <h1>Where the world builds software</h1>
              <p>
                Millions of developers and companies build, ship, and maintain
                their software on GitHub—the largest and most advanced
                development platform in the world.
              </p>
            </TextContent>
            <img src="/globo.png" alt="globoTec" />
          </FirstSection>
          <SecondSection>
            <div>
              <InfoHomeCard title="73+ million" subtitle="Developers" />
              <InfoHomeCard title="4+ million" subtitle="Organizations" />
              <InfoHomeCard title="200+ million" subtitle="Repositories" />
              <InfoHomeCard title="84%" subtitle=" Fortune 100" />
            </div>
          </SecondSection>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Home;
