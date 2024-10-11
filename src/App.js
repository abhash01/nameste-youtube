import "./index.css"; // Import Tailwind styles
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
        {/**
         *
         * Head
         * Body
         *   Sidebar
         *     MenuItems
         *   MainContainer
         *     button list
         *     VideoContainer
         *        VideoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
