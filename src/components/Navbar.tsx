import {
    BarChart3,
    Bookmark,
    BookOpen,
    Clock,
    Heart,
    HelpCircle,
    Home,
    LogOut,
    Settings,
    Star,
    Target,
    Trophy,
    User,
    X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "#", category: "main" },
    { icon: BookOpen, label: "My Subjects", href: "#", category: "main" },
    { icon: Target, label: "Practice Tests", href: "#", category: "main" },
    { icon: Bookmark, label: "Saved Questions", href: "#", category: "main" },
    { icon: Trophy, label: "Achievements", href: "#", category: "progress" },
    {
      icon: BarChart3,
      label: "Progress Report",
      href: "#",
      category: "progress",
    },
    { icon: Clock, label: "Study Timer", href: "#", category: "tools" },
    { icon: Star, label: "Favorites", href: "#", category: "tools" },
    { icon: User, label: "Profile", href: "#", category: "account" },
    { icon: Settings, label: "Settings", href: "#", category: "account" },
    {
      icon: HelpCircle,
      label: "Help & Support",
      href: "#",
      category: "account",
    },
    { icon: Heart, label: "Rate App", href: "#", category: "account" },
  ];

  const handleMenuClick = (item: any) => {
    console.log(`Navigating to ${item.label}`);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
   
<button onClick={()=>toggleMenu()}>menu</button>
      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60">
          <div onClick={toggleMenu} className="absolute inset-0"></div>
        </div>
      )}

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 relative">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">John Doe</h3>
                  <p className="text-purple-100">Grade 5 Student</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {/* Main Section */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">
                    Main
                  </h4>
                  <div className="space-y-1">
                    {menuItems
                      .filter((item) => item.category === "main")
                      .map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuClick(item)}
                          className="w-full flex items-center space-x-4 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Progress Section */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">
                    Progress
                  </h4>
                  <div className="space-y-1">
                    {menuItems
                      .filter((item) => item.category === "progress")
                      .map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuClick(item)}
                          className="w-full flex items-center space-x-4 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Tools Section */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">
                    Tools
                  </h4>
                  <div className="space-y-1">
                    {menuItems
                      .filter((item) => item.category === "tools")
                      .map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuClick(item)}
                          className="w-full flex items-center space-x-4 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Account Section */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wide">
                    Account
                  </h4>
                  <div className="space-y-1">
                    {menuItems
                      .filter((item) => item.category === "account")
                      .map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuClick(item)}
                          className="w-full flex items-center space-x-4 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700 p-6">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-3 p-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-xl border border-red-800 hover:border-red-700"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
