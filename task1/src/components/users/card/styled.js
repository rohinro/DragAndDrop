import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10%
  justify-content: space-around;
  @media screen and (min-width: 600px) {
    padding: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 968px) {
    padding: 0px;
    grid-template-columns: repeat(5, 1fr);
  }

  > div {
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    margin: 4%;
    max-width: 20%;
    border-radius: 6px;
    padding: 2%;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
    > h2 {
      font-size: 25px;
    }

    > img {
      border-radius: 50%;
    }

    > p {
      font-size: 15px;
    }
  }
`;

