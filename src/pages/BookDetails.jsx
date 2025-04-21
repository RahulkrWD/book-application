import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <Layout>
      <h4>Book details</h4>
    </Layout>
  );
}

export default BookDetails;
