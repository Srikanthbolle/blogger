import React from "react";

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
  console.log('email',email)
  const emailDate = new Date(date);
  return (
   <tr className="bg-white border-b hover:bg-gray-50 transition">
  {/* <th
    scope="row"
    className="flex items-center gap-3 px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
  >
    📧
  </th> */}

  <td className="px-6 py-4 text-sm text-gray-700">
    {email || <span className="italic text-gray-400">No email</span>}
  </td>


  <td className="px-6 py-4 text-sm text-gray-600">
    {emailDate?.toDateString?.() || "-"}
  </td>

  <td
    onClick={() => deleteEmail(mongoId)}
    className="px-6 py-4 text-red-600 text-xl hover:text-red-800 cursor-pointer"
  >
    x
  </td>
</tr>

  );
};

export default SubsTableItem;
