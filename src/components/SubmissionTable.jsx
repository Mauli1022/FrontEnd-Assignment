import React from "react";

export default function SubmissionTable({ data }) {
  return (
    <div className="mx-4 my-7 max-w-full overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-[600px] w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="p-3 sm:p-4 w-8"></th>
            <th className="p-3 sm:p-4">Name</th>
            <th className="p-3 sm:p-4">Gender</th>
            <th className="p-3 sm:p-4">Language</th>
            <th className="p-3 sm:p-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="border-t border-dashed border-gray-300 hover:bg-gray-50 transition"
            >
              <td className="p-3 sm:p-4">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3 sm:p-4">{user.name}</td>
              <td className="p-3 sm:p-4">{user.gender}</td>
              <td className="p-3 sm:p-4">{user.languages.join(", ")}</td>
              <td className="p-3 sm:p-4 break-words max-w-[200px]">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
