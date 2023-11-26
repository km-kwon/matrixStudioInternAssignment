import styled from "styled-components";

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  #mainLogo {
    width: 40%;
    padding: 1.5rem;
  }
  #bigCategory {
    list-style: none;
    display: flex;
    width: 90%;
    margin: 0;
    padding: 0 0 0 1rem;
  }
  #subCategory {
    font-size: 1.2rem;
    margin: 1rem;
  }
  #listTitle {
    font-size: 1.5rem;
    padding: 0 0 0 1rem;
    margin: 0 0 0 1rem;
    border-left: solid 4px black;
  }
  #explain {
    margin: 1rem;
  }
  #paging {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
  }
  #paging img {
    width: 3rem;
    padding: 0 0.5rem;
  }
`;

export default Body;
