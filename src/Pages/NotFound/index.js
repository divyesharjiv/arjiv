import React from "react";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center min-h-[70vh] bg-extradark text-offwhite">
      <section className="text-center p-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center font-mont">
            <h1 className="md:text-[210px] text-9xl font-bold font-[serif] tracking-widest">
              404
            </h1>
            <h2 className="md:text-7xl text-5xl font-semibold font-mont mt-6">
              Page Not Found!
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
