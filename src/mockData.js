export const mockShipments = [
  {
    id: "SHP-10021",
    status: "Awaiting Originals", // 'Awaiting Originals', 'Verified', 'Discrepancy'
    supplier: "Global Steel Co.",
    contractDetails: {
      quantity: "500 MT",
      price: "$450/MT",
      cif: "Mundra",
      icd: "Khodiyar",
      hsCode: "72044900",
      insurance: "Covered (110%)",
    },
    draftDocuments: [
      { id: "d1", type: "Bill of Lading", status: "Uploaded", data: { quantity: "500 MT", price: "$450/MT", portOfDischarge: "Mundra" } },
      { id: "d2", type: "Commercial Invoice", status: "Uploaded", data: { quantity: "500 MT", price: "$450/MT", hsCode: "72044900" } },
      { id: "d3", type: "Certificate of Origin", status: "Uploaded", data: { origin: "USA", hsCode: "72044900" } },
      { id: "d4", type: "Packing List", status: "Uploaded", data: { quantity: "500 MT" } },
      { id: "d5", type: "Insurance Certificate", status: "Uploaded", data: { coverage: "110%", destination: "Mundra" } },
      { id: "d6", type: "CIF Details", status: "Uploaded", data: { totalCost: "$225,000", port: "Mundra" } },
      { id: "d7", type: "Form 6", status: "Uploaded", data: { valid: true } },
      { id: "d8", type: "Form 9", status: "Uploaded", data: { valid: true } },
      { id: "d9", type: "PSIC", status: "Uploaded", data: { inspected: true, quantity: "500 MT" } },
      { id: "d10", type: "Freight Certificate", status: "Uploaded", data: { paid: true } }
    ],
    // The "Original" documents that will come in from the email sync
    originalDocuments: [
       { id: "o1", type: "Bill of Lading", data: { quantity: "500 MT", price: "$450/MT", portOfDischarge: "Mundra" } },
       // Let's introduce a discrepancy in the Commercial Invoice for demonstration
       { id: "o2", type: "Commercial Invoice", data: { quantity: "490 MT", price: "$450/MT", hsCode: "72044900" } },
       { id: "o3", type: "Certificate of Origin", data: { origin: "USA", hsCode: "72044900" } },
       { id: "o4", type: "Packing List", data: { quantity: "490 MT" } },
       { id: "o5", type: "Insurance Certificate", data: { coverage: "110%", destination: "Mundra" } },
       { id: "o6", type: "CIF Details", data: { totalCost: "$220,500", port: "Mundra" } },
       { id: "o7", type: "Form 6", data: { valid: true } },
       { id: "o8", type: "Form 9", data: { valid: true } },
       { id: "o9", type: "PSIC", data: { inspected: true, quantity: "500 MT" } }, // PSIC says 500, but packing says 490 -> Discrepancy!
       { id: "o10", type: "Freight Certificate", data: { paid: true } }
    ]
  },
  {
    id: "SHP-10022",
    status: "Verified",
    supplier: "MetalWorks GmbH",
    contractDetails: {
      quantity: "200 MT",
      price: "$510/MT",
      cif: "Mundra",
      icd: "Khodiyar",
      hsCode: "72042190",
      insurance: "Covered (110%)",
    },
    draftDocuments: [
      { id: "d1", type: "Bill of Lading", status: "Uploaded", data: { quantity: "200 MT", price: "$510/MT" } },
      { id: "d2", type: "Commercial Invoice", status: "Uploaded", data: { quantity: "200 MT", price: "$510/MT" } },
    ],
    originalDocuments: [
      { id: "o1", type: "Bill of Lading", data: { quantity: "200 MT", price: "$510/MT" } },
      { id: "o2", type: "Commercial Invoice", data: { quantity: "200 MT", price: "$510/MT" } },
    ]
  }
];
