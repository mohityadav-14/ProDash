// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setUsers(data);
//     }
//     getData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-100 p-6">
    
//       <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
//         Product List
//       </h1>

//       <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users?.map((user) => (
//           <li
//             key={user.id}
//             className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
//           >
//             <img
//               src={user.image}
//               alt={user.title}
//               className="h-40 mx-auto object-contain mb-4"
//             />

//             <h2 className="font-semibold text-lg text-slate-700 mb-2">
//               {user.title}
//             </h2>

//             <p className="text-green-600 font-bold mb-1">
//               ₹ {user.price}
//             </p>

//             <p className="text-sm text-slate-600 line-clamp-3 mb-3">
//               {user.description}
//             </p>

//             <div className="flex justify-between items-center text-sm text-slate-500">
//               <span>⭐ {user.rating.rate}</span>
//               <span>Reviews: {user.rating.count}</span>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getData() {
      // 1 call the API using fetch 
      let response = await fetch("https://fakestoreapi.com/products");
      //convert the data into response.json()
      let data = await response.json();
      //use the data 
      setUsers(data);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Trending <span className="text-indigo-600">Products</span>
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Explore our latest arrivals and top-rated gear.</p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
      {/* condition check for loading state  */}
      {users ? 
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users?.map((user) => (
            <li
              key={user.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 w-full p-6 bg-white overflow-hidden border-b border-slate-50">
                <img
                  src={user.image}
                  alt={user.title}
                  className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                  ⭐ {user.rating.rate}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 block">
                    {user.category}
                  </span>
                  <h2 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {user.title}
                  </h2>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {user.description}
                  </p>
                </div>

                {/* Pricing & Footer */}
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-900">
                      ₹{user.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {user.rating.count} reviews
                    </span>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol> : <h3>Loding please wait...</h3> }
      </div>
    </div>
  );
};

export default Home;