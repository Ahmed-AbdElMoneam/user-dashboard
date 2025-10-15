# User Dashboard

A single-page user management dashboard built with React, TypeScript, SCSS, Redux Toolkit, and Ant Design to display, search, and paginate user data from a public API.

This project was developed as part of a Frontend Engineer technical assessment for Quantum HR.

---

## 🚀 Live Demo

[View Live on Vercel](https://user-dashboard-five-ochre.vercel.app/)

---

## 📋 Features

- **User List Overview**
  - Displays each user's full name, email, and city/country.
  - Responsive header and footer.

- **🔍 Filtering**
  - Search users by full name (case-insensitive).
  - Filter works in combination with pagination.

- **📄 Data Table**
  - Paginated user list (10 per page by default).
  - Next/Previous and page number controls.

- **👤 User Details Modal**
  - View detailed user info: name, email, phone, location, and picture.

- **🔄 Refresh**
  - Reload button to fetch a new set of users.

- **⚡ Loading & Error Handling**
  - Loading spinners for all async actions.
  - Error notifications for API failures.

- **📱 Responsive Design**
  - Mobile-friendly layout using SCSS variables and Ant Design breakpoints.

---

## 🛠 Tech Stack

| Technology      | Purpose                                 |
| --------------- | --------------------------------------- |
| React (Hooks)   | UI components and state management      |
| TypeScript      | Type safety with interfaces             |
| SCSS / SASS     | Modular, maintainable, responsive styling |
| Redux Toolkit   | Centralized state management            |
| Ant Design      | UI components and layout                |
| Axios           | API requests                            |
| Vite            | Fast development and build tool         |

---

## 📂 Project Structure

```markdown
src/
├── components/      # Reusable UI components (Filters, DataSection, Header, Footer, Modal)
├── store/           # Redux slices and store configuration
├── styles/          # Global styles, variables, mixins
├── types/           # TypeScript interfaces
├── App.tsx          # Main app structure
└── main.tsx         # Entry point
```

---

## 📊 User Data Structure

```typescript
interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
```

---

## ⚙️ Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ahmed-AbdElMoneam/quantum-hr-user-dashboard.git
   cd quantum-hr-user-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Locally**
   ```bash
   npm run dev
   ```
   Then open: [http://localhost:5173](http://localhost:5173)

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🧠 Technical Approach

**1. UI Layout**
   - Built a single-page dashboard with Header, Filters, Table, and Modal.
   - Used Flexbox and Ant Design grid for responsive layouts.

**2. State Management**
   - Managed all user data, search, and pagination using Redux Toolkit.
   - Used async thunks for API integration and filtering.

**3. TypeScript**
   - Strict interfaces for user data and component props.
   - Ensured all components are strongly typed.

**4. API Integration**
   - Used Axios to fetch users from [randomuser.me](https://randomuser.me/api/?results=50).
   - Implemented robust loading and error handling.

**5. Styling**
   - Global styles with SCSS variables for colors, spacing, and breakpoints.
   - Organized SCSS modules for each major component.

---

## ⚖️ Trade-offs & Decisions

- **API vs Mock Data:** Used live API for realistic data and to demonstrate async handling.
- **Ant Design:** Chosen for rapid UI development and responsive components.
- **Redux Toolkit:** Centralized state for scalability and maintainability.
- **TypeScript:** Ensured type safety and code reliability.
- **No Add/Edit/Delete:** Focused on view/search/paginate as per requirements.

---

## 🧪 Bonus Features

- Refresh button to reload users.
- TypeScript throughout the codebase.
- Loading states for all async actions.
- Responsive design for mobile and desktop.

---

## 📜 License

This project is for assessment purposes only.
