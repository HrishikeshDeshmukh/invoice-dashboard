import DataTable from "react-data-table-component";
import { useState } from "react";
import InvoiceForm from "./InvoiceForm";


const Table1 = () => {
    

    const [selectedRow, setSelectedRow] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("bg-white");
    
  
    const handleRowClick = (row) => {
        console.log(row); // Check if the row data is correct
        setSelectedRow(row);
        setShowForm(true);
        setBackgroundColor("bg-gray-200");
    };
    
    
      const closeForm = () => {
        setShowForm(false);
        setSelectedRow(null);
        setBackgroundColor("bg-white"); 
      };
    

    const data = [
        { id: 1, companyName: "Geodesic", gst: "22AAAA0000A1ZS", orderID: "SD100037", invoiceID: "1234", issuedDate: "22-02-2022", amount: 12341233, department: "Accounts",remark: "Not paid",
            extraInfo:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 2, companyName: "Opticace Technology PVT", gst: "22AAAA0000A1ZS", orderID: "SD100038", invoiceID: "213", issuedDate: "22-02-2022", amount: 3141515, department: "Admin", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 3, companyName: "Sony", gst: "22AAAA0000A1ZS", orderID: "qw100037", invoiceID: "432", issuedDate: "22-02-2022", amount: 561514151, department: "Finance", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 4, companyName: "IBM", gst: "22AAAA0000A1ZS", orderID: "Gsd100037", invoiceID: "223", issuedDate: "22-02-2022", amount: 5424247, department: "Accounts", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 5, companyName: "ITC Infotech India LTD", gst: "22AAAA0000A1ZS", orderID: "Wei100037", invoiceID: "112234", issuedDate: "22-02-2022", amount: 43536334, department: "Admin", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 6, companyName: "DELL", gst: "22AAAA0000A1ZS", orderID: "Qwe100037", invoiceID: "234", issuedDate: "22-02-2022", amount: 72672552, department: "Legal", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.",},
        { id: 7, companyName: "Apple Mac India", gst: "22AAAA0000A1ZS", orderID: "AsD100037", invoiceID: "1234", issuedDate: "22-02-2022", amount: 292872, department: "Recovery", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 8, companyName: "Microsoft PVT Ltd", gst: "22AAAA0000A1ZS", orderID: "SDwe100037", invoiceID: "112234445555", issuedDate: "22-02-2022", amount: 272776262626, department: "Treasury", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here. Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
        { id: 9, companyName: "HP PVT Ltd", gst: "22AAAA0000A1ZS", orderID: "SD1000937", invoiceID: "112234455", issuedDate: "22-02-2022", amount: 82872, department: "Accounts", remark: "Paid",
            extraInfo:
              "This is additional information about Opticace Technology. You can add any custom content here.Co-Pilot can generate code from scratch, offer auto-complete suggestions, suggest ways of making existing code more efficient, and aid in debugging. It is fluent in Javascript, Python, C++, C#, PHP and many other languages.", },
      ];
  
    const columns = [
        {
          name: "No",
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: "Company Name",
          selector: (row) => row.companyName,
          sortable: true,
        },
        {
          name: "GST or Pan",
          selector: (row) => row.gst,
        },
        {
          name: "Order ID",
          selector: (row) => row.orderID,
        },
        {
          name: "Invoice ID",
          selector: (row) => row.invoiceID,
        },
        {
          name: "Issued Date",
          selector: (row) => row.issuedDate,
        },
        {
          name: "Invoice Amount",
          selector: (row) => `₹ ${row.amount.toLocaleString()}`,
          sortable: true,
        },
        {
          name: "Department",
          selector: (row) => row.department,
        },
      ];

      const customstyles = {
        headRow: {
            style: {
              fontSize: "13px",
              fontWeight: "bold",
              color: "#374151", // Dark gray text
            },
          },
      }
      
    



      const ExpandedComponent = ({ data }) => (
        <div className="p-4 bg-gray-100 text-gray-700 flex flex-col">
            <span className="font-bold text-sm ml-9">Remark</span>
          <p className="text-sm mx-9">
             {data.extraInfo}
          </p>
        </div>
      );

      
  
    return (
        <div className={`absolute top-[200px] left-[79px] w-[1188px] h-[536px]  rounded-t-[12px] ${backgroundColor}` }>
        
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          selectableRows
          fixedHeader
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          customStyles={customstyles}
          highlightOnHover 
          onRowClicked={handleRowClick}
        />


            {showForm && (
                <>
                    {/* Dark overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
                    
                    {/* Invoice Form */}
                    <InvoiceForm data={selectedRow} closeForm={closeForm} />
                </>
            )}

            

      
      </div>
  )
}

export default Table1