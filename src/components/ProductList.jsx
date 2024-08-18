import React from "react";

function ProductList() {
  return (
    <table className="min-w-full bg-white shadow rounded mt-6">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Category</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Sample Data */}
        <tr>
          <td className="py-2 px-4 border-b">Product 1</td>
          <td className="py-2 px-4 border-b">$100</td>
          <td className="py-2 px-4 border-b">Category 1</td>
          <td className="py-2 px-4 border-b">
            <button className="text-blue-500 mr-2">Edit</button>
            <button className="text-red-500">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductList;
