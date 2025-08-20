// Dropdown.jsx
import { storeDropdown } from "./Dropdata";

const Dropdown = () => {
  return (
    <div className="absolute z-50 left-0 w-screen bg-white shadow-lg py-10 px-20 grid grid-cols-3 gap-12">
      {/* Shop Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Shop</h3>
        <ul className="space-y-2">
          {storeDropdown.shop.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="block text-gray-900 font-semibold hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Links</h3>
        <ul className="space-y-2">
          {storeDropdown.quickLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="block text-gray-700 hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Special Stores Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">
          Shop Special Stores
        </h3>
        <ul className="space-y-2">
          {storeDropdown.specialStores.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="block text-gray-700 hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
