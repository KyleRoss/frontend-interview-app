import { Layout } from './Layout';

// Users API Endpoint: https://dummyjson.com/c/fbb6-9a35-4cd7-a755

const App = () => {
  return (
    <Layout title="Users">
      <div className="flex gap-8 items-center mb-4">
        {/* Search Input */}
        <input type="search" placeholder="Search" className="w-full p-2 rounded-md border border-gray-300" />

        {/* Only Active Users Checkbox */}
        <label htmlFor="only-active-users" className="shrink-0 text-sm">
          <input id="only-active-users" type="checkbox" className="mr-2" />
          Only Active Users
        </label>
      </div>

      {/* Users Table */}
      <table className="relative min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Title
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {/* User Row */}
          <tr>
            <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
              <div className="flex items-center">
                <div className="size-11 shrink-0">
                  <img
                    alt=""
                    src="https://dummyjson.com/image/200x200/94a3b8/020617?text=?&fontSize=90"
                    className="size-11 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    User Name
                  </div>
                  <div className="mt-1 text-gray-500">
                    email@address.com
                  </div>
                </div>
              </div>
            </td>
            <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
              <div className="text-gray-900">
                Job Title
              </div>
              <div className="mt-1 text-gray-500">
                Department
              </div>
            </td>
            <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                Active
              </span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset">
                Inactive
              </span>
            </td>
            <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
              Role
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default App;
