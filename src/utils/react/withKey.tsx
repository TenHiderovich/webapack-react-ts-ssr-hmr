import React from "react";

export function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(componet: T) =>
    (props: E, index: number) =>
      React.createElement(
        componet,
        { ...props, key: key ? props[key as keyof E] : index },
        [],
      )
}
