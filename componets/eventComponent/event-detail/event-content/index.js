import classes from "./event-content.module.css";

export function EventContent(props) {
  return (
    <section className={classes.content}>{props.children}</section>
  );
}
