import axios from "axios";
import { useEffect, useState } from "react";
import Body from "./detailStyle";

function Detail() {
  const [data, setData] = useState();

  const getWineDetail = async () => {
    let data = await axios({
      method: "GET",
      url: `https://api.veenoverse.com/ssr/v2/wines/margaret-river-leeuwin-estate-art-series-cabernet-sauvignon`,
    });
    console.log(data);
    console.log(data.data.data.item);
    setData(data.data.data.item);
  };

  useEffect(() => {
    getWineDetail();
  }, []);

  return (
    data && (
      <Body
        avg={
          (data.price_statistic.avg.value / data.price_statistic.max.value) *
          100
        }
        max={
          (data.price_statistic.max.value / data.price_statistic.max.value) *
          100
        }
        real={(data.prices[0].value / data.price_statistic.max.value) * 100}
        min={
          (data.price_statistic.min.value / data.price_statistic.max.value) *
          100
        }
      >
        <div id="headerContainer">
          <img
            src={`${process.env.PUBLIC_URL}/img/arrow.png`}
            alt="logo image"
          />
          <img
            id="mainLogo"
            src={`${process.env.PUBLIC_URL}/img/mainLogo.png`}
            alt="logo image"
          />
        </div>
        <div id="wineSummary">
          <div id="imageContainer">
            <img
              id="wineImage"
              src={`https://image.veenoverse.com${data.image.thumb}`}
              alt=""
            />
          </div>
          <div id="wineInfoContainer">
            <img
              style={{
                width: "75%",
              }}
              src={`${process.env.PUBLIC_URL}/img/ReadMore.png`}
              alt="logo image"
            />
            <div id="country">
              <span>
                {data.country.alpha_3} {">"}{" "}
              </span>
              <span>{data.country.name}</span>
            </div>
            <span id="name">{data.name}</span>
            <div id="tag">
              <span>{data.type.name}</span>
              <span>{data.alcohol}&deg;</span>
              <span>{data.vintage}</span>
            </div>
            <img
              style={{
                width: "50%",
                margin: "auto 0 0 0",
              }}
              src={`${process.env.PUBLIC_URL}/img/rate.png`}
              alt="logo image"
            />
          </div>
        </div>
        <div className="comment">
          <img
            src={`${process.env.PUBLIC_URL}/img/check.png`}
            alt="logo image"
          />
          Perfect for aging and enjoying later
        </div>
        <div className="comment">
          <img
            src={`${process.env.PUBLIC_URL}/img/check.png`}
            alt="logo image"
          />
          98 by Robert Parker ({data.vintage} Vintage)
        </div>
        <div id="priceInfo">
          <div id="realPrice">
            <div>RealPrice / Vestimated Price</div>
            <div id="priceValue">
              <span id="RealValue">{data.prices[0].value}$</span>
              <span id="vestimatedValue"> / {data.prices[0].value}$</span>
            </div>
          </div>
          <div id="lowestPrice">Lowest price</div>
        </div>
        <div id="locationPerPrice">
          <span id="myLocation">My Location</span>
          <span id="allLocation">All</span>
        </div>

        <div id="pirceGraph">
          <span id="Avg">{`Avg ${data.price_statistic.avg.value}$`}</span>
          <span id="Max">{`Max ${data.price_statistic.max.value}$`}</span>
          <span id="Min">{`Min ${data.price_statistic.min.value}$`}</span>
          <span id="Real">{`Real ${data.prices[0].value}$`}</span>
          <span className="infoMessage">
            <img
              src={`${process.env.PUBLIC_URL}/img/ic_check.png`}
              alt="logo image"
            />
            <span className="percentage">
              {`${
                100 -
                (data.prices[0].value / data.price_statistic.max.value) * 100
              }%`}
            </span>
            <span>cheaper than the highest price</span>
          </span>
          <img
            src={`${process.env.PUBLIC_URL}/img/graph.png`}
            alt="logo image"
          />
          <span className="infoMessage">
            <img
              src={`${process.env.PUBLIC_URL}/img/ic_check.png`}
              alt="logo image"
            />
            <span className="percentage">
              {`${
                100 -
                (data.prices[0].value / data.price_statistic.avg.value) * 100
              }%`}
            </span>
            <span>cheaper than the highest price</span>
          </span>
        </div>
        <div id="info">
          <div id="menu">
            <span id="Info">Info</span>
            <span>Price</span>
          </div>
          <div className="explainBox">
            <h1>Tasting Note</h1>
            <p>{data.taste_note}</p>
            <div id="feature">
              <ul>
                <li>
                  <span>PH</span>
                  <span className="tastingValue">NA</span>
                </li>
                <li>
                  <span>Oak usage</span>
                  <span className="tastingValue">NA</span>
                </li>
                <li>
                  <span>Residual sugar</span>
                  <span className="tastingValue">NA</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Harvest brix</span>
                  <span className="tastingValue">NA</span>
                </li>
                <li>
                  <span>Aging</span>
                  <span className="tastingValue">NA</span>
                </li>
                <li>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/Vector.png`}
                    alt="logo image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="explainBox">
            <h1>Grapes</h1>
            <p>{data.grape.description}</p>
            <img
              id="grapesImg"
              src={`${process.env.PUBLIC_URL}/img/Blending-Graoes-Graph.png`}
              alt="logo image"
            />
          </div>
          <div className="explainBox">
            <h1>Region</h1>
            <div id="regionContainer">
              <h2>{data.region.name}</h2>
              <p>{data.region.slug}</p>
            </div>
          </div>
          <div className="explainBox">
            <h1>Aroma</h1>{" "}
            <p>{data.aroma.description ? data.aroma.description : ""}</p>
            <div id="iconContainer">
              {data.aroma.item_groups.map((type, idx) => {
                return (
                  <div className="iconItems">
                    <img
                      src={`https://image.veenoverse.com${type.icon_image}`}
                      alt="logo image"
                    />
                    <div className="iconItemsName">{type.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="explainBox">
            <h1>Pairing</h1>
            <p>{data.decant.description ? data.decant.description : ""}</p>
            <div id="iconContainer">
              {data.pairing.item_groups.map((type, idx) => {
                return (
                  <div className="iconItems">
                    <img
                      src={`https://image.veenoverse.com${type.icon_image}`}
                      alt="logo image"
                    />
                    <div className="iconItemsName">{type.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="explainBox">
            <h1>Decant</h1>
            <p>{data.decant.description ? data.decant.description : ""}</p>
            <div id="iconContainer">
              <div className="iconItems">
                <img
                  src={`${process.env.PUBLIC_URL}/img/minute.png`}
                  alt="logo image"
                />
                <div className="otherIconItemsName">90 min</div>
              </div>
              <div className="iconItems">
                <img
                  src={`${process.env.PUBLIC_URL}/img/glass.png`}
                  alt="logo image"
                />
                <div className="otherIconItemsName">Bordeaux</div>
              </div>
              <div className="iconItems">
                <img
                  src={`${process.env.PUBLIC_URL}/img/temp.png`}
                  alt="logo image"
                />
                <div className="otherIconItemsName">
                  {data.decant.temperature.full_text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    )
  );
}

export default Detail;
