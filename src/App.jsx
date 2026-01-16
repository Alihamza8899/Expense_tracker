import Navbar from "./Navbar.jsx";
import Expensebox from "./Expensebox.jsx";
function App() {
  return (
    <main className=" bg-[#b8982a] max-w-full min-h-screen backdrop-blur-md">
      <Navbar />
      <div className="flex justify-center px-2 py-4 my-16 ">
        <Expensebox />
      </div>
    </main>
  );
}

export default App;
