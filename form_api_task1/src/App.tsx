
import { Provider } from "react-redux";
import { store } from "./store";
import { BaseRoute } from './routes/BaseRoutes'
import './App.css'

function App() {


  return (
    <Provider store={store}>
    <div>
      <BaseRoute/>
    </div>
    </Provider>

  )
}

export default App
