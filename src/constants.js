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
  Passionate full-stack software engineer with focus on the life science industry. Specialist in software
  support for complex laboratory operations with first-hand wet lab experience. Proven ability to quickly
  take ownership of new code bases and master new technologies in a self-reliant fashion.
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
    value: <a href="http://dx.doi.org/10.1080/00268976.2017.1288936">http://dx.doi.org/10.1080/00268976.2017.1288936</a>
  }
]


export const LANGUAGES = [
  {
    name: 'Python',
    profficiency: 5
  },
  {
    name: 'JavaScript',
    profficiency: 4
  },
  {
    name: 'PHP',
    profficiency: 3
  },
  {
    name: 'CSS',
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
export const MAX_PROFFICIENCEY = 5
export const TOOLS = [
  'git', 'Jira', 'Linux', 'Jenkins', 'MSSQL & pgSQL', 'Docker', 'Redis', 'React.js', 'Vue.js', 'GitLab CI/CD'
]

const AMYRIS = {
  name: 'Amyris Inc.',
  location: 'Emeryville, Ca, USA',
  jobs: [
    {
      title: 'Software Engineer I',
      type: 'Full-Time',
      dates: 'Aug. 2020 – Present',
      tasks: [
        {
          description: `Serving as full-stack technical lead in maintaining and expanding the in-house, web-based LIMS
            for analytical chemistry groups.`,
          subtasks: []
        },
        {
          description: `Creating various design patterns for RESTful API interfaces regarding controller invocation,
          validation, and exception handling.`,
          subtasks: []
        },
        {
          description: `Creating and contributing to in-house shared libraries and applications in > 20 repositories.`,
          subtasks: []
        },
        {
          description: `Writing custom Chromeleon TM 7 CDS addins in C# using the SDK.`,
          subtasks: []
        },
        {
          description: `Designing robust and automated data pipelines closing the gap between laboratory and data
          scientists.`,
          subtasks: []
        },
        {
          description: `Serving as service desk and primary communication node for domain stakeholders.`,
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
          description: `Served as primary full-stack developer of the in-house, web-based LIMS for analytical chemistry
          groups.`,
          subtasks: []
        },
        {
          description: `Updated CI/CD of legacy apps to a modern GitLab and Docker based setup.`,
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
          description: `Worked on operationalizing an ultra-high throughput GC-VUV system:`,
          subtasks: [
            'Integrated new components and operations into the existing automation platform.',
            'Developed and validated analytical methods on the system.'
          ]
        },
        {
          description: `Developed and maintained software in support of the analytics platform:`,
          subtasks: [
            'Maintained large legacy code base of a web-based LIMS system.',
            'Wrote and hosted data quality and process control tools serving several analytical groups.',
            'Designed a backend and web interface for transparent and traceable analytical standard preparation.'
          ]
        },
      ]
    },
    {
      title: 'Associate Scientist II',
      type: 'Full-Time',
      dates: 'Jan. 2018 – Oct. 2018',
      tasks: [
        {
          description: `Operated and maintained a variety of chromatographic and other analytical equipment.`,
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