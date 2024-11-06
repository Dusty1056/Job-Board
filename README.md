# Job-Board

A platform for posting and applying for jobs, enabling users to browse job opportunities and submit applications while employers can list open positions. This project uses modern web development technologies for a seamless and responsive experience.

## Features

- **User Registration & Authentication**: Allows job seekers and employers to create accounts, log in, and manage their profiles.
- **Job Posting**: Employers can post new job listings with details like job title, description, location, and requirements.
- **Job Application**: Job seekers can apply to listed jobs and view their application history.
- **File Uploads**: Resume and cover letter upload functionality, stored securely using Amazon S3.
- **Responsive UI**: Built with Tailwind CSS, the application is mobile-friendly and accessible.
- **Real-time Updates**: Get immediate feedback on application statuses and job postings.
  
## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, TypeScript
- **Database**: MongoDB for data storage
- **File Storage**: Amazon S3
- **Styles**: Tailwind CSS for a clean and responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-board.git
   cd job-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory and add the following:

     ```plaintext
     MONGODB_URI=<Your MongoDB connection string>
     AWS_ACCESS_KEY_ID=<Your AWS Access Key>
     AWS_SECRET_ACCESS_KEY=<Your AWS Secret Key>
     S3_BUCKET_NAME=<Your S3 Bucket Name>
     ```

4. Run the application:
   ```bash
   npm run dev
   ```

## Usage

1. **For Job Seekers**:
   - Register an account and complete your profile.
   - Browse available job listings.
   - Apply for jobs by uploading a resume and/or cover letter.

2. **For Employers**:
   - Register an account and create job listings.
   - Manage listings, review applications, and update job statuses.

--- 

Let me know if you'd like any other adjustments!
