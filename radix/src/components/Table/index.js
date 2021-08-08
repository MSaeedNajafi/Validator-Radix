import React from "react";
import styled from "styled-components";

import "../../App.css";

const TableSection = () => {
  const Title = styled.h1`
    color: #00c389;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    cursor: pointer;
    // text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  `;
  return (
    <>
      <Title>Server Specs</Title>

      <table>
        <tr>
          <th>Server Specs</th>
          <td>Asgard</td>
        </tr>
        <tr>
          <th>CPU</th>
          <td>4 cores</td>
        </tr>
        <tr>
          <th>RAM</th>
          <td>16 GB</td>
        </tr>
        <tr>
          <th>Bandwidth</th>
          <td>1 Gbps</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>Strasbourg</td>
        </tr>
      </table>
    </>
  );
};

export default TableSection;
