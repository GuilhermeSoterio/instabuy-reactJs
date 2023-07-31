import React from "react";

export const formatTextWithBr = (text: string): React.ReactNode => {
  const paragraphs = text.split("<br>").map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br />
    </React.Fragment>
  ));
  return paragraphs;
};
