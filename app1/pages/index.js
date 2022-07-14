import React from "react";
import {getFeaturedEvents} from '../data/dummy-data'
import EventList from '../components/events/event-list'

const Home = () => {
  const featuredEvents = getFeaturedEvents()


  return (
    <div>
     <EventList items={featuredEvents}/>
    </div>
  );
};

export default Home;
