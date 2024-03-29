import React, { useState } from "react";
import { Header } from "./header/header";
import { Title } from "./title";
import { Toolbar } from "./toolbar";
import { About } from "./about";
import { Education } from "./education";
import { ToolsLanguages } from "./tools";
import { Experiences } from "./experience/experiences";
import {
  ADDRESS,
  PHONE,
  EMAIL,
  NAME,
  ABOUT,
  EDUCATION,
  LANGUAGES,
  TOOLS,
  EXPERIENCES,
  OTHER_EXPERIENCES,
} from "../constants";

export const Resume = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`bg-${theme}`}>
      <div className={`font-${theme}`}>
        <div className="paper">
          <Header address={ADDRESS} phone={PHONE} email={EMAIL} />
          <Title name={NAME} />
          <About about={ABOUT} />
          <Education education={EDUCATION} />
          <ToolsLanguages languages={LANGUAGES} tools={TOOLS} />
          <Experiences
            experiences={EXPERIENCES}
            header={"Professional Experience"}
            collapsed={false}
          />
          <Experiences
            experiences={OTHER_EXPERIENCES}
            header={"Other Experience"}
            collapsed={true}
          />
        </div>
      </div>
      <Toolbar setTheme={setTheme} />
    </div>
  );
};
