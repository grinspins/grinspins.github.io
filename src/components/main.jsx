import React, { useState } from 'react'
import { Header } from './header/header'
import { Title } from './title'
import { Toolbar } from './toolbar'
import { About } from './about'
import { Education } from './education'

import {
  ADDRESS,
  PHONE,
  EMAIL,
  NAME,
  ABOUT,
  EDUCATION
} from '../constants'


export const Resume = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className={`root ${theme}`}>
      <Toolbar themeHandler={setTheme} />
      <Header address={ADDRESS} phone={PHONE} email={EMAIL} />
      <Title name={NAME} />
      <About about={ABOUT} />
      <Education education={EDUCATION} />
    </div>
  )

}