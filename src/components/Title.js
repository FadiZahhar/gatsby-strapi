import React from "react"

const Title = ({title}) => {
  return (
    <div className="section-title">
      <h2>{title || "Default Title"}</h2>
      <div class="underline"></div>
    </div>
    )
}

export default Title
