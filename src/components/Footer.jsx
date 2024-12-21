function Footer() {
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-8">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <a href="#facebook" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#twitter" className="text-gray-400 hover:text-white">X</a>
            <a href="#instagram" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
          <p className="text-gray-400">&copy; 2024 The Travel App. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;