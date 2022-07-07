import React, { useState } from "react";

import { format } from "date-fns";
import styled from "styled-components";

const Card = ({ data }) => {
  const [showGreeting, setShowGreeting] = useState(false);

  const Smalldiv = styled.div`
    text-align: center;
    width: 250px;
    height: 400px;
    position: relative;
    margin: 5vh;
    padding: 10px;
    border-radius: 15px;
  `;

  const Description = styled.div`
    font-size: 0.7rem;
    width: 200px;
    text-align: center;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const Mail = styled.div`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const Bdata = styled.p`
    position: absolute;
    bottom: 5px;
    font-size: 0.6rem;
  `;

  const Zakaz_rowerow = styled.h2`
    position: center;
    padding-top: 150px;
    font-size: 1.3rem;
  `;

  return (
    <Smalldiv
      onClick={() => setShowGreeting(!showGreeting)}
      style={{
        backgroundColor: data.theme === "light" ? "white" : "black",
        color: data.theme === "light" ? "black" : "white",
      }}
    >
      {showGreeting ? (
        <Zakaz_rowerow>Hello {data.name + " " + data.surname}</Zakaz_rowerow>
      ) : (
        <>
          <p>
            <img
              src={data.profilePicture}
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
              }}
            ></img>
          </p>
          <h2>
            {data.name} {data.surname}
          </h2>
          <Mail>{data.email}</Mail>
          <br />
          <Description>
            <p>{data.description}</p>
          </Description>
          <Bdata>
            Bdata {format(new Date(data.dob), "dd.MM.yyyy")}{" "}
            <img
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/party-popper_1f389.png"
              }
              style={{ width: "0.6rem", height: "0.6rem" }}
            ></img>
          </Bdata>
        </>
      )}
    </Smalldiv>
  );
};

export default Card;
