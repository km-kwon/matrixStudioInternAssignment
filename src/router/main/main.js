import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <h1
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/list");
        }}
      >
        ListPage(click!)
      </h1>
      <h1
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/detail");
        }}
      >
        DetailPage(click!)
      </h1>
    </>
  );
}
export default Main;
