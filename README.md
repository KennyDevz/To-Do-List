

# 🚌 TranCIT - Student Transit Guide

**TranCIT - Student Transit Guide** is a mobile-responsive web application designed to revolutionize the commuting experience for students in Cebu City. It specifically targets freshmen, transferees, and non-local students who are often unfamiliar with the local Public Utility Jeepney (PUJ) system. Our mission is to transform a typically complex and anxiety-inducing daily task into a straightforward, efficient, and stress-free journey.

## 🎯 Problem Solved

Navigating Cebu's jeepney system presents significant challenges due to:
- **Alphanumeric route codes** (e.g., 13C, 04L)
- **Reliance on informal landmark-based directions**
- **Scarcity of comprehensive, accurate digital mapping tools**

This results in:
- Students getting lost
- Taking inefficient routes
- Overpaying for fares
- Experiencing undue stress and safety concerns

## ✨ Key Features

The Student Transit Guide provides a robust set of tools to address these issues:
- **Route Finder**: Generates clear, step-by-step jeepney commute instructions between any specified origin and destination within Cebu City
- **Jeepney Code Translator**: A searchable database that deciphers local jeepney route shorthand, explaining what codes like "13C" signify
- **Fare Estimator**: An automated calculator providing accurate estimated jeepney fares based on the generated route and distance
- **Landmark-Based Navigation**: Integrates prominent city landmarks into directions for intuitive and easier wayfinding
- **Newbie Mode**: Offers a simplified interface with more detailed, beginner-friendly instructions, perfect for first-time commuters
- **Offline Route Saving**: Allows users to save generated routes for access even without an active internet connection

## 🌐 Tech Stack Used

### Frontend:
- **HTML** – Defines the structure and layout of the web pages
- **CSS** – Styles the user interface to ensure a clean and responsive design
- **JavaScript** – Adds interactivity and dynamic behavior to the frontend
- **Folium** – Python library for creating interactive maps and visualizations

### Backend:
- **Django** – Python web framework handling server-side logic, database interactions, and authentication
- **Supabase** – Provides PostgreSQL database with session pooler for efficient connection management

### Services:
- **OpenRouteService API** – Provides routing and geocoding capabilities

### Version Control:
- **Git & GitHub** – Used for source code management, version control, and team collaboration

## 📄 Setup & Run Instructions

### Prerequisites
- Python 3.8+

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/adamxparx/CSIT327-G2-BOACMS.git
   ```

2. **Change directory to the cloned project**
   ```bash
   cd CSIT327-G2-BOACMS
   ```

3. **Create the virtual environment**
   ```bash
   python -m venv venv
   ```

4. **Activate the virtual environment**
   ```bash
   # Windows:
   venv\Scripts\activate
   # MacOS/Linux:
   source venv/bin/activate
   ```

5. **Install the required packages**
   ```bash
   pip install -r requirements.txt
   ```

6. **Create .env file to store environment-specific variables**
   ```bash
   # Supabase PostgreSQL (Session Pooler)
   DATABASE_URL=postgresql://postgres.pmvwundoqvixdukqgwaq:TranCITG6G4@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=require

   # ORS Key
   ORS_API_KEY=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjA3OThjNDFhYWQ0NzRjNTNhYWZmMzQ2NTczYTg2MjYwIiwiaCI6Im11cm11cjY0In0=
   ```

7. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

8. **Run the server**
   ```bash
   python manage.py runserver
   ```

## 💡 Benefits

TranCIT - Student Transit Guide offers numerous benefits to its users:
- **Time Savings**: Reduces time spent seeking directions and waiting for the correct jeepneys
- **Cost Savings**: Prevents overpaying for fares through accurate estimations
- **Reduced Errors**: Minimizes instances of getting lost or taking inefficient routes
- **Increased Safety & Confidence**: Empowers students to travel independently and securely
- **Reduced Stress**: Alleviates the anxiety associated with navigating an unfamiliar city
- **Improved Accessibility**: Makes Cebu's public transport system more approachable for non-local students and newcomers

---

*Making Cebu City navigation simpler, one student at a time.* 🎓
