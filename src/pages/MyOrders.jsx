import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Loading from "../components/Loading";

const MyOrders = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://paw-mart-six.vercel.app/orders?email=${user.email}`)
      .then((res) => {
        setMyOrders(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setLoading, user.email]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("My Orders Report", doc.internal.pageSize.getWidth() / 2, 15, {
      align: "center",
    });

    const tableColumn = [
      "SL",
      "Product",
      "Buyer",
      "Price",
      "Qty",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = myOrders.map((order, index) => [
      index + 1,
      order.productName,
      order.name,
      order.price,
      order.quantity,
      order.address,
      order.date,
      order.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      styles: { fontSize: 10, halign: "center" },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: 255,
        halign: "center",
      },
      columnStyles: {
        1: { halign: "left" },
        5: { halign: "left" },
      },
    });

    doc.save("my_orders_report.pdf");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-[80%] mx-auto mt-10 mb-10">
      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th></th>
              <th>Product/Listing Name</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {myOrders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={downloadPDF} className="btn btn-primary">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
