import { NextPage } from "next";
import React from "react";
import { InfoCard } from "ui/components/InfoCard/InfoCard";

const Repository: NextPage = () => {
  return (
    <div>
      <div>
        <InfoCard title={"Willian-Rodriguesmarvel-heroes"}></InfoCard>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolorum perspiciatis repellendus voluptatum laborum laboriosam
          dolores. Quae et nam expedita harum rem, nulla nobis cum ut, fugiat
          alias minus nostrum!
        </div>
        <a>marvel-heroes-nu.vercel.app</a>
      </div>
      <main>
        <InfoCard title={"Willian-Rodrigues Update next.config.js"} />
      </main>
    </div>
  );
};

export default Repository;
