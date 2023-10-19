import React from "react";
import useDynamicSVGImport from "lib/hooks/useDynamicSVGImport";

export const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);

  if (error) return error.message;
  if (loading) return "Loading...";
  // if (SvgIcon) console.log(typeof SvgIcon)
  if (SvgIcon) return <SvgIcon {...rest} />;

  return null;
};
