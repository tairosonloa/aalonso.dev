---
to: src/<%= path %>/<%= name %>/<%= name %>.tsx
---
import React, { FC } from "react"

import styles from "./<%= name %>.module.scss"

type <%=name%>Props = {
  // TODO
}

export const <%= name %>: FC<<%=name%>Props> = (_props) => {
  return (
    <div className={styles.container}>
      <h1><%= name %></h1>
      <p>This is the <%= name %> component!</p>
    </div>
  )
}
