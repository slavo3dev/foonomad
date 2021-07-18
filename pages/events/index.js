import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import {
  EventList,
  EventsSearch,
} from "../../componets/eventComponent";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
