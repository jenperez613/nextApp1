import React from "react";
import Head from "next/head";
import { getFeaturedEvents } from "./helpers/api-util";
import EventList from "../components/events/event-list";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name="description" content="find a great event to attend"/>
      </Head>
      <EventList items={props.events} />
    </div>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default Home;
