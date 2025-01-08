const Portfolio = () => {
    return (
      <section id = "portfolio" className="h-screen w-screen  py-20 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">My Masterpiece Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          <img src="/images/portfolio1.jpg" alt="Project 1" className="rounded-lg shadow-lg" />
          <img src="/images/portfolio2.jpg" alt="Project 2" className="rounded-lg shadow-lg" />
          <img src="/images/portfolio3.jpg" alt="Project 3" className="rounded-lg shadow-lg" />
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  