import Achievement from "./components/Achievement";
import { CallToAction } from "./components/CallToAction";
import Categories from "./components/Categories";
import { Companies } from "./components/Companies";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
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
