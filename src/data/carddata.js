import invoice from "../assets/1.svg";
import payable from "../assets/2.svg";
import overdue from "../assets/3.svg";
import paid from "../assets/4.svg"; 
import reject from "../assets/5.svg"; 
import dispute from "../assets/6.svg";
import department from "../assets/7.svg";
import vendor from "../assets/8.svg";// SVG file import

export  const CardsData = [
  {
    name: "Invoice Received",
    icon:invoice,  // This will be a URL to the SVG file
    total: 1234,
    rupees: 123456,
    link:"/invoice"
  },

  {
    name: "Payable amount",
    icon:payable,  // This will be a URL to the SVG file
    total: 234,
    rupees: 123456,
    link:"/invoice"
  },

  {
    name: "Overdue",
    icon:overdue,  // This will be a URL to the SVG file
    total: 1234,
    rupees: 123456,
    link:'/invoice'
  },

  {
    name: "Paid amount",
    icon:paid,  // This will be a URL to the SVG file
    total: 1434,
    rupees: 123456,
    link:'/invoice'
  },


  {
    name: "Rejected",
    icon:reject,  // This will be a URL to the SVG file
    total: 4234,
    rupees: 123456,
    link:'/invoice'
  },


  {
    name: "Dispute",
    icon:dispute,  // This will be a URL to the SVG file
    total: 1234,
    rupees: 123456,
    link:'/invoice'
  },

  {
    name: "Department",
    icon:department,  // This will be a URL to the SVG file
    total: 1234,
    rupees: 123456,
    link:'/invoice'
  },

  {
    name: "Vendors",
    icon:vendor,  // This will be a URL to the SVG file
    total: 234,
    rupees: 123456,
    link:"/invoice"
  }
  
];
