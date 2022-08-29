import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { Clock } from "../components/tick";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Link href="/chat">
      <a>go chat</a>
    </Link>
  )
};

export default Home;
