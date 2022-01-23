import React from "react"
import { Box } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <a className="logoheader navbar-brand ml-auto" href="">
        <img src={`${process.env.PUBLIC_URL}/images/space_garbage.jpg`} width="80" height="80" />
      </a>
    </Box>
  )
}
