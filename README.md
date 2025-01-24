# Certificate Validation Web Application

This project is a web-based application that allows users to validate certificates by entering a unique certificate code or scanning a QR code. The application displays the certificate details, including an image of the certificate, the recipient's name, and other relevant information.

---

## Features

- User-friendly interface for entering certificate codes.
- QR code scanning functionality that redirects to a validation page.
- Display of certificate details, including a soft copy of the certificate.
- Fixed navigation bar with a logo.
- Footer with copyright information.

---

## Technologies Used

- **HTML**: For creating the structure of the application.
- **CSS**: For styling the pages and ensuring a responsive design.
- **JavaScript**: For dynamic QR code generation and certificate validation.
- **QRCode.js**: For generating QR codes.

---

## File Structure
```
project-folder/
│
├── assets/
│   ├── back.png           # Background image
│   ├── 22.png              # Logo image
│   ├── certificates/      # Folder containing certificate images
│       ├── 12345.png      # Example certificate image
│       ├── 67890.png      # Example certificate image
│
├── index.html             # Main page for certificate code input
├── qrpage.html          # Page for validating certificates via QR code
├── styles.css             # CSS file for styling
├── script.js              # JavaScript file for dynamic functionalities
└── README.md              # Project documentation
```
---


## How to Run the Project

1. **Clone or Download the Repository**
   Clone the repository to your local system or download it as a ZIP file and extract it.

2. **Open the Project**
   - Navigate to the project folder.
   - Open `index.html` in a web browser.

3. **Adding Certificates**
   - Place certificate images in the `assets/certificates/` folder.
   - Ensure each image is named after its unique certificate code (e.g., `12345.png`).

4. **Usage**
   - On the main page (`index.html`), enter the unique certificate code and press "Validate."
   - For QR code validation, scan the QR code to be redirected to the `qrpage.html` page.

---

## Customization

1. **Background Image**
   Replace `back.png` in the `assets/` folder to change the background.

2. **Logo**
   Replace `22.png` in the `assets/` folder with your own logo.

3. **Footer**
   Edit the footer text in `index.html` and `qrpage.html` to reflect your organization.

4. **Certificate Details**
   Modify the `certificateData` object in `script.js` to include more details or change the structure.

---

## Known Issues and Solutions

- **QR Code Not Displaying**: Ensure the `script.js` file is correctly linked in `index.html` and `qrpage.html`.
- **Certificate Not Found**: Verify that the certificate image exists in the `assets/certificates/` folder and matches the entered code.

---

## Credits

- Project designed and developed by **Akanksha Charitable Trust®, Puttur**.

---

## License

This project is licensed under the **MIT License**.
