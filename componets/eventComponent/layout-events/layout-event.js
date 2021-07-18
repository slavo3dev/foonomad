import { Fragment } from "react";

import { EventHeader } from "./event-header";

export function LayoutEvent(props) {
  return (
    <Fragment>
      <EventHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}


