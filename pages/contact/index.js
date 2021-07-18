import { Fragment } from "react";
import { ContactForm } from "../../componets";
import Head from "next/head";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact us for help</title>
        <meta name="description" content="Contact me" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
