import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/layoutcomponents/Header/Header"
import { FlexWrapper, Footer } from "./components"
import { Fragment, Suspense } from "react"
import route from "./Pages"

function App() {
  return (
    <Fragment>
      <Suspense fallback={"loding"}>
        <Router>
          <Header />
          <FlexWrapper>
            <Routes>
              {route.map((items, index) => {
                return (
                  <Route
                    key={index}
                    path={items.path}
                    element={items.element}
                  />
                )
              })}
            </Routes>
          </FlexWrapper>
          <Footer />
        </Router>
      </Suspense>
    </Fragment>
  )
}

export default App
