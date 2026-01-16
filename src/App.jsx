import Navbar from "./Navbar.jsx";
import Expensebox from "./Expensebox.jsx";
import AboutApp from "./AboutApp.jsx"
function App() {
  return (
    <main className=" bg-white max-w-full min-h-screen backdrop-blur-md">
      <Navbar />
      <div className="flex justify-center px-2 py-16 bg-[#dcdcdc] min-h-[35rem]">
        <Expensebox />
      </div>
    <div className="h-[26.5rem] w-full bg-[#101a37] shadow shadow-[#101a37]">
      <AboutApp/>
    </div>
    </main>
  );
}

export default App;
