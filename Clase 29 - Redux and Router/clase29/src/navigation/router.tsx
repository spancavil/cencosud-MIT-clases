import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Root from "../pages/Root/Root"
import Home from "../pages/Home/Home"
import News from "../pages/News/News"
import NewsDetail from "../pages/NewsDetail/NewsDetail"
import Counter from "../components/Counter/Counter"
import NotFound from "../pages/NotFound/NotFound"

const router: any = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      {/* Declare more router and an error page */}
      <Route path="/counter" element = {<Counter/>} />
      <Route path="*" element = {<NotFound/>}/>
    </Route>
  )
)

export default router
