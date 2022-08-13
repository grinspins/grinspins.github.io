import React from "react";

export const NAME = "Sebastian Mainberger";

export const ADDRESS = [
  "Sebastian Mainberger",
  "Krögelsteiner Str. 3b",
  "81243, München",
];

export const PHONE = "+49 1573 8131179";
export const EMAIL = "sebastian.mainberger@gmail.com";

export const ABOUT = `
  Full-stack software engineer with experience in the life science industry.
  Specialist in software support for analytical chemistry operations with
  first-hand work experience in an operational lab. Proven ability to quickly
  take ownership of new code bases and master new technologies in a self-reliant
  fashion.
`;

export const EDUCATION = [
  {
    key: "2010-2014",
    value: "Bioprocess Engineering B.S., Technical University Munich",
  },
  {
    key: "2014-2017",
    value:
      "Pharmaceutical Bioprocess Engineering M.S., Technical University Munich",
  },
  {
    key: "Publications",
    value: (
      <a href="http://dx.doi.org/10.1080/00268976.2017.1288936">
        http://dx.doi.org/10.1080/00268976.2017.1288936
      </a>
    ),
  },
];

export const LANGUAGES = [
  {
    name: "Python",
    profficiency: 4,
  },
  {
    name: "JavaScript",
    profficiency: 4,
  },
  {
    name: "CSS",
    profficiency: 3,
  },
  {
    name: "PHP",
    profficiency: 2,
  },
  {
    name: "C#",
    profficiency: 2,
  },
  {
    name: "C/C++",
    profficiency: 1,
  },
];
export const MAX_PROFFICIENCEY = 4;
export const TOOLS = [
  "git",
  "Jira",
  "Linux",
  "Jenkins",
  "MSSQL & pgSQL",
  "Docker",
  "Redis",
  "React.js",
  "Vue.js",
  "CI/CD",
];

const AMYRIS = {
  name: "Amyris Inc.",
  location: "Emeryville, CA, USA",
  jobs: [
    {
      title: "Senior Software Engineer",
      type: "Full-Time",
      dates: "Oct. 2021 – Present",
      tasks: [
        {
          description: `Serve as Technical Product Manager for a process development
            group.`,
          subtasks: [
            `Identify software requirements with stakeholders and align individual
              needs with overall strategy.`,
            "Curate and communicate development tasks.",
            "Serve as lead developer on development teams.",
          ],
        },
      ],
    },
    {
      title: "Software Engineer II",
      type: "Full-Time",
      dates: "Oct. 2021",
      tasks: [],
    },
    {
      title: "Software Engineer I",
      type: "Full-Time",
      dates: "Aug. 2020 – Sep. 2021",
      tasks: [
        {
          description: `Served as full-stack technical lead in maintaining and expanding
            the in-house, web-based LIMS for analytical chemistry groups.`,
          subtasks: [],
        },
        {
          description: `Conceived various design patterns for RESTful API interfaces
          regarding controller invocation, validation, and exception handling.`,
          subtasks: [],
        },
        {
          description: `Created and contributed to in-house shared libraries and
            applications in > 25 repositories.`,
          subtasks: [],
        },
        {
          description: `Wrote custom Chromeleon™ 7 CDS addins in C# using the SDK.`,
          subtasks: [
            // `Watchdog to monitor instrument status and send notifications if an
            //   instrument queue aborts.`,
            // `Script to extract standard qualification data and evaluate comparability of
            //   two standard lots.`,
          ],
        },
        {
          description: `Wrote C# desktop applications for automation purposes.`,
          subtasks: [],
        },
        {
          description: `Designed robust and automated data pipelines closing the gap
            between laboratory and data scientists.`,
          subtasks: [],
        },
        {
          description: `Served as service desk and primary communication node for domain
            stakeholders.`,
          subtasks: [],
        },
      ],
    },
    {
      title: "Associate Software Engineer",
      type: "Full-Time",
      dates: "Nov. 2019 – Aug. 2020",
      tasks: [
        {
          description: `Served as primary full-stack developer of the in-house,
            web-based LIMS for analytical chemistry groups.`,
          subtasks: [],
        },
        {
          description: `Updated CI/CD of legacy apps to a modern GitLab and Docker
            based setup.`,
          subtasks: [],
        },
      ],
    },
    {
      title: "Development Engineer I",
      type: "Full-Time",
      dates: "Oct. 2018 – Nov. 2019",
      tasks: [
        {
          description: `Operationalized constant pressure LC on the Vanquish UHPLC
            system using Chromeleon™ 7 CDS.`,
          subtasks: [],
        },
        {
          description: `Worked on operationalizing an ultra-high throughput GC-VUV system.`,
          subtasks: [
            "Integrated new components and operations into the existing automation platform.",
            "Developed and validated analytical methods on the system.",
          ],
        },
        {
          description: `Developed and maintained software in support of the analytics
            platform.`,
          subtasks: [
            "Maintained large legacy code base of a web-based LIMS system.",
            `Wrote and hosted data quality and process control tools serving several
              analytical groups.`,
            `Designed a backend and web interface for transparent and traceable
              analytical standard preparation.`,
          ],
        },
        {
          description: "Wrote Automation scripts.",
          subtasks: [],
        },
      ],
    },
    {
      title: "Associate Scientist II",
      type: "Full-Time",
      dates: "Jan. 2018 – Oct. 2018",
      tasks: [
        {
          description: `Operated and maintained a variety of analytical equipment for
            the analysis of fermented whole cell broth: GC, GC-MS, HPLC, UHPLC and HPIC.`,
          subtasks: [],
        },
        {
          description: `Improved data quality by analyzing large datasets to evaluate
            instrument and assay performance and maintenance scheduling and developed
            statistical process control tools.`,
          subtasks: [],
        },
        {
          description: `Communicated and discussed results and challenges with stakeholders.`,
          subtasks: [],
        },
      ],
    },
  ],
};

export const EXPERIENCES = [AMYRIS];

const TUM = {
  name: "Chair of Process Systems Engineering, TUM",
  location: "Freising, DE",
  jobs: [
    {
      title: "Research Associate",
      type: "Part-Time",
      dates: "Aug. 2018 – Dec. 2018",
      tasks: [
        {
          description: `Performed molecular dynamics simulations to predict diffusion
            coefficients of MOSH and MOA components.`,
          subtasks: [],
        },
      ],
    },
    {
      title: "Master Thesis and Research Associate",
      type: "Full-Time",
      dates: "Apr. 2016 – Feb. 2017",
      tasks: [
        {
          description: `Thesis: Experimental and Molecular Dynamic Studies of Deep
            Eutectic Solvents.`,
          subtasks: [
            "Conducted molecular dynamics simulations.",
            "Wrote Python and Bash scripts to automate data acquisition and accelerate analysis.",
            "Performed differential scanning calorimetry experiments.",
            "Published an article in an international, peer-reviewed journal.",
          ],
        },
      ],
    },
    {
      title: "Research Internship",
      type: "Full-Time",
      dates: "Apr. 2015",
      tasks: [
        {
          description: "Prepared the lab course “Process automation”.",
          subtasks: [
            `Developed and tested a breadboard model of a filling station including hard- and software.`,
            "Wrote a guide for students to follow in the course.",
          ],
        },
      ],
    },
  ],
};

const ROCHE = {
  name: "Roche Diagnostics GmbH ",
  location: "Mannheim, DE",
  jobs: [
    {
      title: "Analytical Process Optimization Intern",
      type: "Full-Time",
      dates: "Oct. 2015 – Mar. 2016",
      tasks: [
        {
          description: `Aided in the validation of a method for the identification and
            quantification of extractables and leachables, occurring in the production of parenteral drugs, based on GC/MS.`,
          subtasks: [
            "Acquired and prepared samples for measurement and conducted the latter.",
            "Analyzed acquired data and presented results in written form.",
            "Built a model of a filling module in respect to plastic parts in contact with the product.",
            "Cross-validated results with LC/MS and TOC data.",
          ],
        },
        {
          description: `Conducted experiments regarding the adhesion and exact point of
            sealing of rubber stoppers for pre-filled syringes using the Methylene Blue Dye Test.`,
          subtasks: [],
        },
      ],
    },
  ],
};

const TUM2 = {
  name: "Chair of Brewing and Beverage Technology, TUM",
  location: "Freising, DE",
  jobs: [
    {
      title: "Research Internship",
      type: "Full-Time",
      dates: "Nov. 2014",
      tasks: [
        {
          description:
            "Aided in the development of temperature inducible genetic promoters.",
          subtasks: [
            "Prepared media for cell cultivation and samples for analysis.",
            "Conducted photometric measurements.",
            "Cultivated cells and maintained original strains.",
            "Handled genetically modified organisms.",
          ],
        },
      ],
    },
  ],
};

const NOWEDA = {
  name: "Noweda e.G.",
  location: "Bergkirchen, DE",
  jobs: [
    {
      title: "Side Job in Warehousing",
      type: "Full-Time",
      dates: "Jul. 2014 – May. 2015",
      tasks: [],
    },
  ],
};

const BACHELOR = {
  name: "Chair of Urban Water Systems Engineering, TUM",
  location: "Garching, DE",
  jobs: [
    {
      title: "Bachelor Thesis",
      type: "Full-Time",
      dates: "Dec. 2013 – Apr. 2014",
      tasks: [
        {
          description: `Thesis: Development of Mass Spectrometric Enzyme Assays for Various
          Isoforms of Cytochrome P450.`,
          subtasks: [
            "Developed and prepared enzyme assays.",
            "Monitored progression of assays in real time by means of mass-spectrometry.",
            "Validated results with fluorescence- and UV/VIS-spectroscopic measurements.",
            "Performed statistical analysis on the results.",
          ],
        },
      ],
    },
  ],
};

const AMPERVERBAND = {
  name: "Amperverband KöR",
  location: "Olching, DE",
  jobs: [
    {
      title: "Intern",
      type: "Full-Time",
      dates: "Jan. 2013 – Mar. 2013",
      tasks: [
        {
          description:
            "Monitored and validated a wastewater treatment process.",
          subtasks: [
            `Set parameters for aerobic and anaerobic fermentation, high pressure thermal
            hydrolysis and drying processes under direct supervision.`,
            `Took process samples and performed physical, chemical and microbial analysis.`,
          ],
        },
      ],
    },
  ],
};

const ODELZHAUSEN = {
  name: "Brauerei Odelzhausen Hans & Maria Eser GmbH & Co.KG",
  location: "Odelzhausen, DE",
  jobs: [
    {
      title: "Intern",
      type: "Full-Time",
      dates: "May. 2010 – Jun. 2010",
      tasks: [
        {
          description: `Aided in the quality insurance of resources and product, monitored 
          the brewing process, performed and validated the cleaning and sanitation of equipment.`,
          subtasks: [],
        },
      ],
    },
  ],
};

const TENGELMANN = {
  name: "Kaiser’s Tengelmann AG",
  location: "Olching, DE",
  jobs: [
    {
      title: "Side Job as Store Clerk    ",
      type: "Full-Time",
      dates: "Nov. 2008 – Mar. 2014",
      tasks: [],
    },
  ],
};

export const OTHER_EXPERIENCES = [
  TUM,
  ROCHE,
  TUM2,
  NOWEDA,
  BACHELOR,
  AMPERVERBAND,
  ODELZHAUSEN,
  TENGELMANN,
];
