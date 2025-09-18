import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container py-24">
      <div className="max-w-xl mx-auto text-center glass rounded-2xl p-10">
        <h1 className="text-5xl font-display">404</h1>
        <p className="mt-2 text-foreground/70">Page not found.</p>
        <a href="/" className="mt-6 inline-block btn-gradient px-5 py-2 rounded-md text-white font-semibold">Return Home</a>
      </div>
    </section>
  );
};

export default NotFound;
