import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Heading } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageFeatures from "../components/Features/ImageFeatures";
import JustifiedCTA from "../components/JustifiedCTA";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    {/* <Heading>Hello Next.js</Heading> */}
    <Hero></Hero>
    <ImageFeatures></ImageFeatures>
    <JustifiedCTA></JustifiedCTA>
  </Layout>
);

export default IndexPage;
