
# Academic Portal App

This project is a **student academic portal** built with **React**.
The main goal is to show different types of student-related information like **assignments, courses, CGPA, dashboard widgets**, etc. in a clean way.

---

## Project Flow in Simple Words

1. **Starting Point (main.jsx & App.jsx)**

   * The app starts from **main.jsx**.
   * Here we wrap our app with **DataProvider (context)** so that all pages can use the same data easily.
   * Then `App.jsx` decides what layout to show (Navbar, Sidebar, Pages).

---

2. **Context (DataContext.jsx)**
   * **Context** helps all components (Assignments page, Dashboard, etc.) to get the same data.
   * We also connect it with **localStorage** so the data doesn’t disappear on refresh.

---

3. **Data (data folder)**

   * We keep our initial data like:

     * `assignments.js` → assignment details
     * `courses.js` → course details
     * `student.js` → student’s personal info

---

4. **Hooks (useAssignmentFilter.js)**

   *  **custom hook**
   * Example: If user selects a course, only assignments from that course are shown.

---

5. **Components (Navbar, Sidebar, Dashboard, Breadcrumb)**

   * These are reusable UI parts:

     * **Navbar.jsx** → Top navigation
     * **Sidebar.jsx** → Side navigation links
     * **Dashboard.jsx** → Shows a summary
     * **Breadcrumb.jsx** → Shows current page path

---

6. **Pages (Assignments, Courses, CGPA, DashboardWidget)**

   * Each page focuses on one feature:

     * **Assignments.jsx** → Shows assignments list with filter options.
     * **Courses.jsx** → Shows available courses.
     * **CGPA.jsx** → Displays CGPA or academic progress.
     * **DashboardWidget.jsx** → Small cards with personal/student/course/notification info.

---

## How Everything Connects Together

* When app runs → **App.jsx loads Navbar + Sidebar + current Page**.
* Pages get data from **Context (DataContext.jsx)**.
* Pages like Assignments use extra logic from **custom hook (useAssignmentFilter.js)**.
* Data is taken from **data folder** (hardcoded for now).
* Components like Breadcrumb or Dashboard just display information in a nice way.

---

👉 So the flow is like this:
**main.jsx → App.jsx → Layout (Navbar + Sidebar + Page) → Page uses Context Data + Custom Hook → UI Components show it.**

---

