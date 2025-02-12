# Vue Form Dashboard

A simple **Vue 3 + Vuetify** dashboard that dynamically fetches and displays form links from an **n8n webhook**.

## Features

- 📋 Displays a list of forms dynamically from **n8n webhook**.
- 🎨 **Vuetify UI** with a clean and responsive design.
- 🌙 **Dark mode support** with a floating theme switcher.
- 🐳 **Dockerized** for easy deployment.

## Prerequisites

- **Node.js** (>= 18)
- **npm** (or **yarn**)
- **Docker** (optional, for containerized deployment)

## Getting Started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/vue-form-dashboard.git
cd vue-form-dashboard
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Set up the n8n Webhook

Ensure your n8n instance is running and provides a webhook at:

```sh
http://n8n.voidmoose.local/webhook/forms
```

This should return JSON data in the following format:

```json
{
  "data": [
    { "Form Name": "Tank Parameter Entry", "Form URL": "https://n8n.voidmoose.local/form/tank-param-entry" },
    { "Form Name": "Test", "Form URL": "https://n8n.voidmoose.local/form/test" }
  ]
}
```

### 4️⃣ Run the project locally

```sh
npm run dev
```

Your app should now be accessible at http://localhost:5173.

## 🐳 Deploy with Docker

### 1️⃣ Build the Docker image

```sh
docker build -t vue-form-dashboard .
```

### 2️⃣ Run the container

```sh
docker run -d -p 8080:80 --name form-dashboard vue-form-dashboard
```

Now, visit http://localhost:8080 in your browser! 🚀

## 📂 Project Structure

```sh
📦 vue-form-dashboard
├── 📂 src
│   ├── 📂 components    # Vue components
│   ├── 📂 views         # Page views
│   ├── App.vue         # Root component
│   ├── main.js         # Entry point
├── 📜 package.json     # Dependencies & scripts
├── 📜 Dockerfile       # Docker container setup
├── 📜 .dockerignore    # Ignore files for Docker
└── 📜 README.md        # Project documentation
```

## 🔧 Configuration

You can customize the theme, API URL, and other settings inside src/main.js.

For example, to change the default theme:

```json
defaultTheme: "dark", // Change to "light" if needed
```

## 🚀 Future Enhancements

- ✅ Authentication for secure form access.

- 🔍 Search & Filtering for large form lists.

- 📊 Analytics Dashboard to track form submissions.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## 📜 License

MIT License © 2025 Voidmoose