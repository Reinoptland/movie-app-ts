import React, { ReactElement } from "react";

interface Props {
  error: string;
}

export default function DiscoverError(props: Props): ReactElement {
  return <div>{props.error}</div>;
}
