import image from "./assets/Ali.jpg";

let CreatedBy = () => {
  return (
    <>
    <h1 className="text-4xl text-white font-bold px-16 py-4 ">Created By</h1>
    <div id="createdby" className="flex flex-col md:justify-evenly items-center">
      <div className="w-[70%] md:w-[25%] h-[18rem] rounded-full my-6">
        <img
          src={image}
          alt="createdby-pic"
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div className="text-xl text-white leading-10 p-4">
        <h1>
          Name : <strong> Ali Hamza </strong>
        </h1>
        <h1>
          Project: <strong> Expense Tracker </strong>
        </h1>
        <h1>
          LinkedIn :
          <a href="https://www.linkedin.com/in/ali-hamza-981807343/">
               Ali's profile
          </a>
        </h1>
      </div>
    </div>
    </>
  );
};
export default CreatedBy;
