import { useMemo } from "react";

const withBasePath = (rawHtml) => {
  if (!rawHtml) return "";

  const basePath = import.meta.env.BASE_URL || "/";
  const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;

  return rawHtml
    .replace(/(["'(])\/mirror\//g, `$1${normalizedBase}mirror/`)
    .replace(/(["'(])\/images\//g, `$1${normalizedBase}images/`);
};

function RawHtmlBlock({ html }) {
  const resolvedHtml = useMemo(() => withBasePath(html), [html]);

  return <div dangerouslySetInnerHTML={{ __html: resolvedHtml }} />;
}

export default RawHtmlBlock;
