import Navbar from "./Navbar.jsx";
import Expensebox from "./Expensebox.jsx";
import AboutApp from "./AboutApp.jsx";
import AppFeatures from "./AppFeatures.jsx";
import CreatedBy from "./CreatedBy.jsx";

function App() {
  return (
    <main className=" bg-white w-full min-h-full backdrop-blur-md">
      <Navbar />
      <div className="flex justify-center px-2 py-16 bg-[#dcdcdc] min-h-[35rem]">
        <Expensebox />
      </div>
      <div className="min-h-[26.5rem] w-full bg-[#101a37] p-4 shadow shadow-[#101a37]">
        <AboutApp />
      </div>
      <div className="w-full min-h-[25rem] bg-[#dcdcdc] p-4">
        <AppFeatures />
      </div>
      <div className="w-full min-h-[20rem] bg-[#101a37]">
        <CreatedBy />
      </div>
    </main>
  );
}

export default App;
