import React from "react"
import WeatherComp from "./components/WeatherComp/WeatherComp"
import HeaderComp from "./components/HeaderComp/HeaderComp"
import FooterComp from "./components/FooterComp/FooterComp"

function App() {

  return (
<React.Fragment>
<HeaderComp />
<WeatherComp/>
<FooterComp />
</React.Fragment>
  )
}

export default App
