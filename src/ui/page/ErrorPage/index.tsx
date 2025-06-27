import TopNavbar from "../../component/TopNavbar";

export default function ErrorPage() {
  return (
    <>
      <TopNavbar/>
      <div className="d-flex justify-content-center align-items-center" style={{height: "85vh"}}>
        <img
          width={600}
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Error_20221125_ViuTV_Sales_Presentation.png"/>
      </div>
    </>
  )
}