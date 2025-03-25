import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/events", label: "Events" },
  { path: "/contact_us", label: "Contact Us" },
  { path: "/what-we-do", label: "What We Do" },
  { path: "/journey", label: "Journey" },
  { path: "/customization", label: "Customization" },
  { path: "/grading", label: "Grading" },
  { path: "/policies", label: "Policies" },
  { path: "/rjcpolicy", label: "RJC Policy" },
  { path: "/provenance", label: "Provenance" },
  { path: "/csr", label: "CSR" },
];

const SiteMap = () => {
  return (
    <main className="main-content bg-primary">
      <div className="container mx-auto px-6 sm:py-8 py-6">
        <div className="container max-w-5xl text-primary mx-auto bg-offwhite backdrop-blur-lg shadow-xl rounded-xl sm:p-8 p-5 border border-border">
          <h1 className="md:text-4xl text-2xl font-extrabold mb-8 border-b-2 border-border pb-4 uppercase text-center tracking-wide">
            ARJIV EXPORTS - Site Map
          </h1>
          <ul className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-10 gap-6 my-8">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="sm:text-2xl text-xl text-blue-600 hover:underline"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SiteMap;
