import React, { useEffect, useState } from "react";
import { compareAsc, format } from "date-fns";

import Card from "../components/Card";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { render } from "react-dom";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Biggerdiv = styled.div`
  padding: 0;
  margin: 0;
  background-color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
const Bigdiv = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Smallerdiv = styled.div`
  background-color: whitesmoke;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 2vh 0 0 3vw;
`;

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("https://dummy-api.deta.dev/user").then((response) => {
      console.log("do something with the", response);
      console.log("it to see how it looks");
      setDatas(response.data);
    });
  }, []);

  return (
    <Biggerdiv>
      <Bigdiv>
        <Smallerdiv>
          <Title>People</Title>
        </Smallerdiv>
        {datas.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </Bigdiv>
    </Biggerdiv>
  );
}

export default Home;
