import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaTasks, FaCalendar, FaChartBar } from 'react-icons/fa';
import axios from 'axios';

const Dash = () => {
  axios.defaults.withCredentials = true;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3001/dash')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    navigate('/add');
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(err => setError('Failed to delete product.'));
  };

  return (
    <main>
      <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white min-h-screen flex-shrink-0 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Tasky</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/dashboard" className="flex items-center text-gray-300 hover:text-white">
                  <FaTachometerAlt className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/tasks" className="flex items-center text-gray-300 hover:text-white">
                  <FaTasks className="mr-3" />
                  Tasks
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/calendar" className="flex items-center text-gray-300 hover:text-white">
                  <FaCalendar className="mr-3" />
                  Calendar
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/reports" className="flex items-center text-gray-300 hover:text-white">
                  <FaChartBar className="mr-3" />
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-white shadow-md p-4 flex-shrink-0 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex space-x-4">
            <button onClick={handleAddTask} className="bg-blue-600 text-white px-4 py-2 rounded-md">
              + Add New
            </button>
            <Link to="/login">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
                Log Out
              </button>
            </Link>
          </div>
        </header>

        
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product._id} className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-xl text-gray-700 mb-2">Price: ${parseFloat(product.price).toFixed(2)}</p>
                  <p className="text-md text-gray-600 mb-2">Category: {product.category}</p>
                  <p className="text-sm text-gray-500">{product.product_des}</p>
                  <div className="mt-4">
                    <Link to={`/update/${product._id}`}>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
    </main>
  );
};

export default Dash;
