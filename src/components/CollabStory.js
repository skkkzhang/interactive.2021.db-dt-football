import React from "react";
import styled from 'styled-components';
import './Collab.css';
import CollabHeader from "./CollabHeader";

function CollabStory(props) {
  const ArticleCard = styled.a`
    box-sizing: border-box;
    font-family: 'Gotham Condensed';
    font-size: 24px;
    line-height: 140%;
    background-color: white;
    margin: 30px auto;
    text-align: left;
    max-width: 1252px;
    width: 90%;
    display: block;
    color: black;
    text-decoration: none;
  `;
  const ArticleImg = styled.img`
    width: 100%;
  `;
  const ArticleInfo = styled.div`
    padding: 26px 2%;
  `;
  const ArticleTitle = styled.div`
    max-width: 561px;
  `;
  const ArticleByline = styled.div`
    font-family: 'Press Start 2P';
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    margin-top: 20px;
  `;
  return (
    <div>
      <CollabHeader data={props.data}/>
      {
        props.data['article_cards'].map((card, index) =>
          <ArticleCard href={card['article_link']} key={index}>
            <ArticleImg src={card['image_link']}/>
            <ArticleInfo>
              <ArticleTitle>{card['title']}</ArticleTitle>
              <ArticleByline>{card['byline']}</ArticleByline>
            </ArticleInfo>
          </ArticleCard>
        )
      }
    </div>
  );
}

export default CollabStory;
