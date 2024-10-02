// import { useContext } from "react";
// import myContext from "../../context/myContext";

// const OrderDetail = () => {
//   const context = useContext(myContext);
//   const { getAllOrder, deleteProduct } = context;
//   // console.log(getAllOrder)
//   return (
//     <div>
//       <div>
//         <div className="py-5">
//           <h1 className=" text-xl text-pink-300 font-bold">All Order</h1>
//         </div>

//         <div className="w-full overflow-x-auto">
//           <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
//             <tbody >
//               <tr>
//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
//                 >
//                   S.No.
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Order Id
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Image
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Title
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Category
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Price
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Quantity
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Total Price
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Status
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Name
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Address
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Pincode
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Phone Number
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Email
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Date
//                 </th>

//                 <th
//                   scope="col"
//                   className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
//                 >
//                   Action
//                 </th>
//               </tr>
//               {getAllOrder?.map((order) => {
//                 return (
//                   <>
//                     {order.cartItems.map((item, index) => {
//                       const {
//                         id,
//                         productImageUrl,
//                         title,
//                         category,
//                         price,
//                         quantity,
//                       } = item;
//                       return (
//                         <tr key={index} className="text-pink-300">
//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                             {index + 1}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                             {id}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             <img src={productImageUrl} alt="img" />
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {title}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {category}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             ₹{price}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {quantity}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             ₹{price * quantity}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l text-green-600  first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.status}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.addressInfo.name}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.addressInfo.address}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.addressInfo.pincode}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.addressInfo.mobileNumber}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
//                             {order.email}
//                           </td>

//                           <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                             {order.date}
//                           </td>

//                           <td
//                             onClick={() => deleteProduct(order.id)}
//                             className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "
//                           >
//                             Delete
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetail;


import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, deleteProduct } = context;

  return (
    <div>
      <div className="py-5">
        <h1 className="text-xl text-pink-300 font-bold">All Orders</h1>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Order Id</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Image</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Title</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Category</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Price</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Quantity</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Total Price</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Status</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Name</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Address</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Pincode</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Phone Number</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Email</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Date</th>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Action</th>
            </tr>

            {getAllOrder?.map((order, orderIndex) => {
              return order.cartItems.map((item, itemIndex) => {
                const {
                  id,
                  productImageUrl,
                  title,
                  category,
                  price,
                  quantity,
                } = item;
                return (
                  <tr key={id} className="text-pink-300">
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{orderIndex + 1}.{itemIndex + 1}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{id}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100"><img src={productImageUrl} alt="img" /></td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{title}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{category}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">₹{price}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{quantity}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">₹{price * quantity}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-green-600">{order.status}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.addressInfo.name}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.addressInfo.address}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.addressInfo.pincode}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.addressInfo.mobileNumber}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.email}</td>
                    <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">{order.date}</td>
                    <td
                      onClick={() => deleteProduct(id)}
                      className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-red-500 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
