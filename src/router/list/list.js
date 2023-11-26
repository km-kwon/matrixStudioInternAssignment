import axios from "axios";
import { useEffect, useState } from "react";
import Body from "./listStyle";
import Card from "./listCard";

function List() {
  const [data, setData] = useState(null);

  const getWineDetail = async () => {
    let data = await axios({
      method: "GET",
      url: `https://api.veenoverse.com/ssr/v2/wines`,
      params: {
        subcategory: "red",
        sort: "higher_price",
        page: 1,
      },
    });
    console.log(data.data.data);
    setData(data.data.data);
    //setThumb(data.data.data.item.image.thumb);
  };

  useEffect(() => {
    getWineDetail();
  }, []);

  function Category() {
    return data?.breadcrumbs.map((type, idx) => {
      if (idx === data.breadcrumbs.length - 1) {
        return <span key={idx}> {type.name}</span>;
      }
      return (
        <span key={idx}>
          {type.name} {">"}
        </span>
      );
    });
  }

  return (
    data && (
      <Body>
        <img
          id="mainLogo"
          src={`${process.env.PUBLIC_URL}/img/mainLogo.png`}
          alt="logo image"
        />
        <ul id="bigCategory">
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/wines.png`} alt="wines" />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/img/grapes.png`}
              alt="grapes"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/img/wineries.png`}
              alt="wineries"
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/img/pairing.png`}
              alt="pairing"
            />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/extra.png`} alt="extra" />
          </li>
        </ul>
        <div id="subCategory">
          <Category />
        </div>
        <span id="listTitle">
          {data?.breadcrumbs[data?.breadcrumbs.length - 1].name} Wine
        </span>
        <div id="explain">
          Your Wine Journey Begins Here | Explore the Wine Test Result!
        </div>
        {data.items.map((type, idx) => {
          return <Card key={idx} data={type} />;
        })}
        <div id="paging">
          <img
            id="mainLogo"
            src={`${process.env.PUBLIC_URL}/img/leftArrow.png`}
            alt="logo image"
          />
          {data.pagination.page} of {data.pagination.total_page}
          <img
            id="mainLogo"
            src={`${process.env.PUBLIC_URL}/img/rightArrow.png`}
            alt="logo image"
          />
        </div>
      </Body>
    )
  );
}
export default List;
