import Achievement from "./components/Achievement";
import { CallToAction } from "./components/CallToAction";
import Categories from "./components/Categories";
import { Companies } from "./components/Companies";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App ">
      <Header />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
