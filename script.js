// Load certificate data (mocking backend call)
const certificates = [
    { code: "ACT-NMMS-25-TR-P0Op", name: "KESHAVA NAIK", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/Intern_Name.png" },
    { code: "ACT-NMMS-25-TR-XTdM", name: "HARSHITHA D", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/Intern_Name.png" },
    { code: "ACT-NMMS-25-TR-ofRP", name: "DHANYASHREE", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/Intern_Name.png" },
    { code: "ACT-NMMS-25-TR-E0aQ", name: "ADAMASAB JALAGERI", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/Intern_Name.png" },
    { code: "ACT-NMMS-25-TR-tTk4", name: "DITHESH GOWDA B", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/Intern_Name.png" },
    { code: "ACT-NMMS-25-TR-u0TS", name: "A R SACHITH", course: "NMMS Trainee Intern", date: "2025-02-01", "image": "Certificates/A R SACHITH.jpg" }
  ];
  
  // Function to fetch certificate details by code
function getCertificateDetails(certCode) {
  return certificates.find(cert => cert.code === certCode) || null;
}
