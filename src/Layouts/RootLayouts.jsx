import { NavLink, Outlet } from "react-router-dom"

function RootLayouts() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Find Jobs ?</h1>
          <NavLink to = '/'>Home</NavLink>
          <NavLink to = 'about'>About</NavLink>
          <NavLink to = 'help'>Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default RootLayouts
