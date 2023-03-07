import React from "react";
import useDynamicSVGImport from "hooks/useDynamicSVGImport";

export const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const {error, loading, SvgIcon} = useDynamicSVGImport(name);

  if (error) return error.message;
  if (loading) return 'Loading...';
  if (SvgIcon) return <SvgIcon {...rest} />;

  return null;
};
