import React from "react";
import { Link } from "react-router-dom";
import { Services } from "./Data/Services";
import { Text, Maincontainer, Container } from "./Styling";
const Veterinary = () => {
  return (
    <Container>
      {Services.map((data, index) => {
        return (
          <>
            {data.id === 1 ? (
              <Link
                to={`/vet/${data.id}`}
                state={data}
                style={{ textDecoration: "none" }}
              >
                <Maincontainer key={index}>
                  <img src={data.image} alt="" />

                  <Text>
                    {data.service}
                    <br></br>
                    Help Line No: x
                  </Text>
                </Maincontainer>
              </Link>
            ) : (
              <Link
                to={`/vet/${data.id}`}
                state={data}
                style={{ textDecoration: "none" }}
              >
                <Maincontainer key={index}>
                  <img src={data.image} alt="" />

                  <Text>{data.service}</Text>
                </Maincontainer>
              </Link>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Veterinary;
