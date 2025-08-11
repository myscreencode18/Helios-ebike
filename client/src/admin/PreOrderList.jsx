import React, { useEffect, useState } from "react";
import axios from "axios";

const PreOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/preorders/getpreorders");
        setOrders(res.data.data);
      } catch (err) {
        setError("Failed to fetch pre-orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Pre-orders List</h1>

      {loading && <p className="text-center">Loading pre-orders...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Color</th>
                <th className="py-3 px-6 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-yellow-50">
                  <td className="py-3 px-6">{order.name}</td>
                  <td className="py-3 px-6">{order.email}</td>
                  <td className="py-3 px-6">{order.phone || "-"}</td>
                  <td className="py-3 px-6">{order.color || "-"}</td>
                  <td className="py-3 px-6">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PreOrderList;
