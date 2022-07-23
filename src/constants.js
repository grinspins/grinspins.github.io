import React from 'react'

export const NAME = 'Sebastian Mainberger'

export const ADDRESS = [
  'Sebastian Mainberger',
  'Krögelsteiner Str. 3b',
  '81243, München'
]

export const PHONE = '+49 1573 8131179'
export const EMAIL = 'sebastian.mainberger@gmail.com'

export const ABOUT = `
  Full-stack software engineer with experience in the life science industry.
  Specialist in software support for analytical chemistry operations with
  first-hand work experience in an operational lab. Proven ability to quickly
  take ownership of new code bases and master new technologies in a self-reliant
  fashion.
`

export const EDUCATION = [
  {
    key: '2010-2014',
    value: 'Bioprocess Engineering B.S., Technical University Munich'
  },
  {
    key: '2014-2017',
    value: 'Pharmaceutical Bioprocess Engineering M.S., Technical University Munich'
  },
  {
    key: 'Publications',
    value: (
      <a href="http://dx.doi.org/10.1080/00268976.2017.1288936">
        http://dx.doi.org/10.1080/00268976.2017.1288936
      </a>
    )
  }
]


export const LANGUAGES = [
  {
    name: 'Python',
    profficiency: 4
  },
  {
    name: 'JavaScript',
    profficiency: 4
  },
  {
    name: 'CSS',
    profficiency: 3
  },
  {
    name: 'PHP',
    profficiency: 2
  },
  {
    name: 'C#',
    profficiency: 2
  },
  {
    name: 'C/C++',
    profficiency: 1
  }
]
export const MAX_PROFFICIENCEY = 4
export const TOOLS = [
  'git',
  'Jira',
  'Linux',
  'Jenkins',
  'MSSQL & pgSQL',
  'Docker',
  'Redis',
  'React.js',
  'Vue.js',
  'CI/CD'
]

const AMYRIS = {
  name: 'Amyris Inc.',
  location: 'Emeryville, CA, USA',
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
            "Serve as lead developer on development teams."
          ]
        }
      ]
    },
    {
      title: "Software Engineer II",
      type: "Full-Time",
      dates: "Oct. 2021",
      tasks: []
    },
    {
      title: 'Software Engineer I',
      type: 'Full-Time',
      dates: 'Aug. 2020 – Sep. 2021',
      tasks: [
        {
          description: `Served as full-stack technical lead in maintaining and expanding
            the in-house, web-based LIMS for analytical chemistry groups.`,
          subtasks: [],
        },
        {
          description: `Conceived various design patterns for RESTful API interfaces
          regarding controller invocation, validation, and exception handling.`,
          subtasks: []
        },
        {
          description: `Created and contributed to in-house shared libraries and
            applications in > 25 repositories.`,
          subtasks: []
        },
        {
          description: `Wrote custom Chromeleon™ 7 CDS addins in C# using the SDK.`,
          subtasks: [
            `Watchdog to monitor instrument status and send notifications if an
              instrument queue aborts.`,
            `Script to extract standard qualification data and evaluate comparability of
              two standard lots.`
          ]
        },
        {
          description: `Wrote C# desktop applications for automation purposes.`,
          subtasks: []
        },
        {
          description: `Designed robust and automated data pipelines closing the gap
            between laboratory and data scientists.`,
          subtasks: []
        },
        {
          description: `Served as service desk and primary communication node for domain
            stakeholders.`,
          subtasks: []
        },
      ]
    },
    {
      title: 'Associate Software Engineer',
      type: 'Full-Time',
      dates: 'Nov. 2019 – Aug. 2020',
      tasks: [
        {
          description: `Served as primary full-stack developer of the in-house,
            web-based LIMS for analytical chemistry groups.`,
          subtasks: []
        },
        {
          description: `Updated CI/CD of legacy apps to a modern GitLab and Docker
            based setup.`,
          subtasks: []
        },
      ]
    },
    {
      title: 'Development Engineer I',
      type: 'Full-Time',
      dates: 'Oct. 2018 – Nov. 2019',
      tasks: [
        {
          description: `Operationalized constant pressure LC on the Vanquish UHPLC
            system using Chromeleon™ 7 CDS.`,
          subtasks: []
        },
        {
          description: `Worked on operationalizing an ultra-high throughput GC-VUV system.`,
          subtasks: [
            'Integrated new components and operations into the existing automation platform.',
            'Developed and validated analytical methods on the system.'
          ]
        },
        {
          description: `Developed and maintained software in support of the analytics
            platform.`,
          subtasks: [
            'Maintained large legacy code base of a web-based LIMS system.',
            `Wrote and hosted data quality and process control tools serving several
              analytical groups.`,
            `Designed a backend and web interface for transparent and traceable
              analytical standard preparation.`
          ]
        },
        {
          description: "Wrote Automation scripts.",
          subtasks: []
        }
      ]
    },
    {
      title: 'Associate Scientist II',
      type: 'Full-Time',
      dates: 'Jan. 2018 – Oct. 2018',
      tasks: [
        {
          description: `Operated and maintained a variety of analytical equipment for
            the analysis of fermented whole cell broth: GC, GC-MS, HPLC, UHPLC and HPIC.`,
          subtasks: []
        },
        {
          description: `Improved data quality by analyzing large datasets to evaluate
            instrument and assay performance and maintenance scheduling and developed
            statistical process control tools.`,
          subtasks: []
        },
        {
          description: `Communicated and discussed results and challenges with stakeholders.`,
          subtasks: []
        },
      ]
    }
  ]
}

export const EXPERIENCES = [AMYRIS]