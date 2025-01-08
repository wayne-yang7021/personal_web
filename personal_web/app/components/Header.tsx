"use client"
const Header = () => {
    const handleScroll = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到指定區塊
      }
    };
  
    return (
      <header className="flex justify-between items-center p-5 bg-gray-800 text-white fixed w-full z-10">
        <div className="text-2xl font-bold">Wayne</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer" onClick={() => handleScroll('profile')}>Home</li>
            <li className="cursor-pointer" onClick={() => handleScroll('services')}>Services</li>
            <li className="cursor-pointer" onClick={() => handleScroll('portfolio')}>Portfolio</li>
            <li className="cursor-pointer" onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  