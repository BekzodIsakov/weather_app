import React from "react";
import useDynamicSVGImport from "lib/hooks/useDynamicSVGImport";
import { iconNames } from "lib/constants";

export const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);

  if (loading) return "Loading...";
  if (error) return error.message;
  if (SvgIcon) return <SvgIcon {...rest} />;

  return null;
};
