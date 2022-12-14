import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PopularItem({ item }) {
  const { id, title, name, release_date, first_air_date, poster_path } = item;
  const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  console.log(item);
  return (
    <ItemBlock>
      <Link to={`/${title ? "movie" : "tv"}/${id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title || name} />
        </ImgBox>
        <Title>{title || name}</Title>
        <ReleaseDate>{release_date || first_air_date}</ReleaseDate>
      </Link>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  text-align: center;
  & + & {
    margin-left: 20px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 400px;
  overflow: hidden;
  background-color: red;
  img {
    height: 100%;
  }
`;

const Title = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.span`
  font-size: 0.9em;
  color: #bbb;
`;
