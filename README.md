# VoucherVault

## Overview
VoucherVault is a powerful yet simple application for creating and managing vouchers with QR codes. It supports PDF generation with configurable settings, making it an ideal tool for businesses to streamline voucher-related processes.

## Features
### 1. Login System
- Secure authentication with session management using `express-session`.
- Prevent unauthorized access to voucher management.

### 2. Dashboard
- View a list of existing vouchers.
- Generate new QR-coded vouchers with ease.

### 3. Generate QR Code
- Automatically generate a unique 10-digit code.
- Create and store QR codes in the database along with metadata like generated date and expiry date.

### 4. PDF Generation
- Export vouchers as professionally styled PDFs.
- Includes:
  - Title (configurable).
  - Generated date and expiry date.
  - QR code, centrally aligned.
  - Configurable dimensions and font sizes.

### 5. Settings Page
- Set voucher dimensions (width and height in mm).
- Adjust font sizes for titles and text.
- Configure maximum expiry time.

### 6. Print Voucher
- Directly print the PDF voucher from the browser.

## Tech Stack
- **Backend Framework**: Node.js with Express.
- **Frontend Rendering**: EJS (Embedded JavaScript Templates).
- **Styling**: Tailwind CSS.
- **Database**: SQL Server Express (managed via TypeORM).
- **PDF Generation**: jsPDF.
- **QR Code Generation**: qrcode package.
- **Language**: TypeScript.

### **Installation**

1. Clone the repository:  
   ```bash
   git clone 
   cd VoucherVault

2. Setup environment variables:
   Create a .env file in the root directory with the following:
   ```bash
   
   PORT = 4004
   SESSION_SECRET = <your-session-secret-key>
   LOGIN_PASSWORD = <your-login-password>
   LOGIN_USERNAME = <your-login-username>
   MYSQL_HOST = <your-mysql-host>
   MYSQL_USER = <your-mysql-user>
   MYSQL_DB = <your-mysql-db>
   MYSQL_PASSWORD = <your-mysql-password>
   MYSQL_PORT = <your-mysql-port>
   NODE_ENV = 

4. Install dependencies:  
   ```bash
   npm install

5. Start the development server:
   ```bash
   npm run dev

4. Open your browser and navigate to http://localhost:3000:
  
## **Dummy Accounts**
  
### **User**
- **Username**: `admin123`  
- **Password**: `password123`

## **Screenshots**

1. **Login Page**  
   ![Login Page](/public/images/login.png)

2. **Landing Page** 
   ![Landing Page](/public/images/landing.png)

3. **Vouchers Page** 
   ![Voucher Page](/public/images/vouchers.png)
   
4. **Settings Page** 
   ![Settings Page](/public/images/settings.png)

``

## **Contact**

**Mubasir VC**  
[Portfolio](https://my-portfolio-ten-sand-14.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/mubasir-vc/)
