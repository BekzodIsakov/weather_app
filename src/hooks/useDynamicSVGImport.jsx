import { useState, useEffect, useRef } from "react";

const useDynamicSVGImport = (name, options = {}) => {
  console.log('');
  console.clear();

  const importedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { onCompleted, onError } = options;

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importedIconRef.current = (
          await import(`../assets/icons/${name}.svg`)
        ).ReactComponent;
        if (onCompleted) {
          onCompleted(name, importedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name, onCompleted, onError]);

  return { SvgIcon: importedIconRef.current, loading, error };
};

export default useDynamicSVGImport;
