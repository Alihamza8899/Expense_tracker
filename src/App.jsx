import Navbar from "./Navbar.jsx";
import Expensebox from "./Expensebox.jsx";
function App() {
  return (
    <main className=" bg-white max-w-full min-h-screen backdrop-blur-md">
      <Navbar />
      <div className="flex justify-center px-2 py-16 bg-[#dcdcdc] h-[30rem]">
        <Expensebox />
      </div>
    </main>
  );
}

export default App;
