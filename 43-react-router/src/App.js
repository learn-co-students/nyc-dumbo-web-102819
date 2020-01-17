import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import { SpiceGirl, Scary, Baby, Ginger, Posh, Sporty } from './spice-girls';
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spice Force Five</h1>
          <aside className="sidebar">
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
              </li>
              {
                this.state.spiceGirls.map(spice => 
                  <li key={ spice.id }>
                    <NavLink activeClassName="selected" to={ `/spice/${ spice.slug }` }>{ spice.adjective }</NavLink>
                  </li>)
              }
            </ul>
          </aside>
        </header>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/spice/:slug" render={ this.renderSpice } />
          <Route component={ NotFound } />
        </Switch>
        {
        // <Baby />
        // <Sporty />
        // <Scary />
        // <Posh />
          //<iframe width="560" height="315" src="https://www.youtube.com/embed/P8WCVZ2kHI8?start=24&autoplay=true" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        }
      </div>
    );
  }

  renderSpice = (renderProps) => {
    const slug = renderProps.match.params.slug
    const spiceGirl = this.state.spiceGirls.find(spice => spice.slug === slug)
    if (spiceGirl)
      return <SpiceGirl adjective={ spiceGirl.adjective } gif={ spiceGirl.gif } />
    else
      return <NotFound />
  }

  state = {
    spiceGirls: [
      {
        id: 1,
        adjective: "Scary",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        slug: "mel-b",
      },
      {
        id: 2,
        adjective: "Baby",
        gif: "https://media.giphy.com/media/PSfMwrLPXUtrO/giphy.gif",
        slug: "emma",
      },
      {
        id: 3,
        adjective: "Ginger",
        gif: "https://media.giphy.com/media/ZA1X3mZigRMoo/giphy.gif",
        slug: "geri"
      },
      {
        id: 4,
        adjective: "Posh",
        gif: "https://media.giphy.com/media/f4X5yhZlnZXLa/giphy.gif",
        slug: "victoria",
      },
      {
        id: 5,
        adjective: "Sporty",
        gif: "https://media.giphy.com/media/ag5PDZoSMrFuM/giphy.gif",
        slug: "mel-c",
      },
    ]
  }

}

