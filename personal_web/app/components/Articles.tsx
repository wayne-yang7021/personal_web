const Articles = () => {
    return (
      <section className="h-screen w-screen py-20">
        <h2 className="text-center text-3xl font-bold mb-8">My Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          <article className="bg-white p-5 shadow-lg rounded-lg">
            <h3 className="font-bold">Welcome to Jekyll</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </article>
          <article className="bg-white p-5 shadow-lg rounded-lg">
            <h3 className="font-bold">WordPress Hosting Tips</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </article>
        </div>
      </section>
    );
  };
  
  export default Articles;
  