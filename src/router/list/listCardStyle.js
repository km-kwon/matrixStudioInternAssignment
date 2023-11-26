import styled from "styled-components";

const Body = styled.div`
  display: flex;
  width: 90%;
  height: 10rem;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem 0 1rem 0;
  border-bottom: solid 2px black;
  #imageContainer {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  img {
    height: 10rem;
  }
  #itemExplain {
    display: flex;
    width: 60%;
    height: 90%;
    flex-direction: column;
  }
  #name {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .priceIdContainer {
    margin: 0.6rem 0 0 0;
  }
  #price {
    margin: 0 0.5rem 0 0;
    font-size: 1.3rem;
    font-weight: 600;
  }
  #volume {
    font-size: 0.9rem;
    color: gray;
  }
  .tag {
    margin: 1rem 0 0 0;
  }
  .tag span {
    padding: 0.3rem;
    border-radius: 20rem;
    background-color: #f4f4f4;
    margin: 0 0.5rem 0 0;
  }
`;

export default Body;
