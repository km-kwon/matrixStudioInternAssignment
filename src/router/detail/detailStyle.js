import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  #headerContainer {
    margin: 2rem 0 1rem 1rem;
    width: 90%;
  }
  #mainLogo {
    margin: 0 0 0 0.5rem;
  }
  #wineSummary {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 13rem;
    margin: 0 auto 1rem auto;
  }
  #imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    overflow: hidden;
  }
  #wineImage {
    height: 100%;
  }
  #wineInfoContainer {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  #country {
    color: gray;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  #name {
    font-size: 1.1rem;
    font-weight: 600;
    text-align: right;
  }
  #tag {
    display: flex;
    margin: 0.5rem 0;
  }
  #tag span {
    color: #8041d9;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.1rem 0.3rem;
    border: 2px solid #8041d9;
    border-radius: 10px;
    margin: 0 0.2rem;
  }
  .comment {
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 7px;
    padding: 0 0.5rem;
    width: 90%;
    height: 1.5rem;
    margin: 0.2rem auto;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .comment img {
    height: 100%;
    margin: 0 0.5rem 0 0;
  }
  #priceInfo {
    width: 90%;
    height: 3.5rem;
    margin: 1rem auto 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #lowestPrice {
    padding: 0.5rem;
    color: white;
    background-color: #8041d9;
    border-radius: 2rem;
  }
  #RealValue {
    color: #8041d9;
    font-weight: 700;
    font-size: 1.7rem;
  }
  #vestimatedValue {
    color: #8041d9;
    font-weight: 600;
    font-size: 1.3rem;
  }
  #locationPerPrice {
    width: 90%;
    margin: 1rem auto 1rem auto;
  }
  #locationPerPrice span {
    padding: 0.4rem;
    border-radius: 20px;
  }
  #myLocation {
    border: 3px solid #8041d9;
    color: #8041d9;
    margin: 0 0.5rem 0 0;
  }
  #allLocation {
    border: 3px solid black;
  }
  #pirceGraph {
    width: 86%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
    background-color: #eaeaea;
    border-radius: 20px;
  }
  #Avg {
    width: ${(props) => props.avg - 5}%;
    margin: 0.2rem 0;
    border-radius: 5px;
    background-color: #e8d9ff;
    padding: 0 0 0 1rem;
    color: gray;
  }
  #Max {
    width: ${(props) => props.max - 5}%;
    margin: 0.2rem 0;
    border-radius: 5px;
    background-color: #e8d9ff;
    padding: 0 0 0 1rem;
    color: gray;
  }
  #Real {
    width: ${(props) => props.real - 5}%;
    margin: 0.2rem 0 1rem 0;
    border-radius: 5px;
    background-color: #a566ff;
    padding: 0 0 0 1rem;
    color: white;
  }
  #Min {
    width: ${(props) => props.min - 5}%;
    margin: 0.2rem 0;
    border-radius: 5px;
    background-color: #e8d9ff;
    padding: 0 0 0 1rem;
    color: gray;
  }
  .infoMessage {
    display: flex;
    align-items: center;
  }
  .percentage {
    color: #8041d9;
    margin: 0 0.5rem;
  }
  #info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #menu {
    width: 100%;
    margin: 1rem 0 0 0;
    display: flex;
  }
  #menu span {
    width: 50%;
    text-align: center;
  }
  #Info {
    width: 50%;
    color: #8041d9;
    border-bottom: 3px solid #8041d9;
  }
  .explainBox {
    margin: 0 1rem;
  }
  #feature {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    border-radius: 10px;
    background-color: #eaeaea;
  }
  #feature ul {
    list-style: none;
    padding: 0;
    width: 50%;
    margin: 0 0.5rem 0 0.5rem;
  }
  #feature li {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  .tastingValue {
    color: #8041d9;
  }
  #grapesImg {
    width: 100%;
  }
  #iconContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.4rem;
    border-radius: 10px;
    background-color: #eaeaea;

    margin: 2rem 0 1rem 0;
  }
  .iconItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .iconItemsName {
    text-align: center;
    font-size: 0.8rem;
    width: 2rem;
    height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  }
  .otherIconItemsName {
    text-align: center;
    font-size: 1rem;
    width: 5rem;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
  }
`;

export default Body;
