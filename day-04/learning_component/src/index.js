import React from 'react'
import ReactDOM from 'react-dom'
import Button from './exercise/button'
import InputField from './exercise/input'
import AlertBox from './exercise/alertBox'

const rootElement = document.getElementById('root')

const ListSkills =() => {
    const skills = [
        'Html',
        'CSS',
        'Javascript',
    ];
   const techSkill= skills.map((skill)=><li key={skill}>{skill}</li>)
   return techSkill
}
const welcomeNote = "Welcome to 30 days of react"
const gettingStarted ="Getting started react"
const scripts ="Javascript library"
const personName ="Bartholomew Bassey"
const date = "14-02-2024"
const copyright = "2024"
const Header =() => (
    <header>
        <h1>{welcomeNote}</h1>
        <h2>{gettingStarted}</h2>
        <h3>{scripts}</h3>
        <p>{personName}</p>
        <small>{date}</small>
        <div><Button/></div>
        <AlertBox type="success" message="This message was successful"/>
    </header>
)
const Main = () => (
    <main>
        <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
        <ul>
            <ListSkills/>
        </ul>
        <div><InputField/></div>
    </main>
)

const Footer = () => (
    <footer>
        <p>Copyright, &copy;{copyright}</p>
    </footer>
)

const App = (
    <div>
          <Header/>
          <Main/>
          <Footer/>
    </div>
  
)


ReactDOM.render(App, rootElement)