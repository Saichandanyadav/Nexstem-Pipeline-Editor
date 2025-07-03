Here is your `README.md` content in Markdown format:

```markdown
# 🔧 Nexstem Pipeline Editor – DAG Builder (Frontend Intern Assignment)

A visually stunning, interactive, and fully functional Pipeline Editor built using React and React Flow. This tool lets users construct Directed Acyclic Graphs (DAGs) by adding nodes and connecting them with edges. The editor supports drag-and-drop, real-time DAG validation, auto layout, and more.

---

## 🚀 Features

- 🎨 **Modern UI** with gradient backgrounds, smooth animations, and clean layout
- ➕ Add Nodes using a sleek modal form (not a prompt)
- 🔗 Connect Nodes interactively with directional arrows
- ❌ Delete selected nodes or edges using the Delete key
- ✅ DAG Validation with instant feedback:
  - At least 2 nodes
  - No cycles
  - All nodes connected
  - No self-loops
- 🧭 Auto Layout support using `dagre` for clear visual structure
- 🧩 Modular components: `CustomNode`, `ControlsPanel`, `ValidationService`
- 🧠 Real-time DAG logic maintained with clean state management
- 📜 Instructions panel built-in: users always know what to do

---

## 📸 Screenshots

> Add screenshots of your UI here using:
> `![Screenshot](./screenshots/ui.png)`

---

## 📦 Project Structure

```

pipeline-editor/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ControlsPanel.js
│   │   └── CustomNode.js
│   ├── utils/
│   │   ├── dagValidation.js
│   │   └── layoutHelper.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md

````

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [React Flow](https://reactflow.dev/)
- [Dagre](https://github.com/dagrejs/dagre)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 📄 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pipeline-editor.git
   cd pipeline-editor
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

4. **Visit your app**
   Open [http://localhost:3000](http://localhost:3000)

---

## 🧪 How to Use

* Click **Add Node** to input a name and place it into the graph
* Click and drag from the green (right) handle to the red (left) handle of another node to connect
* Press **Delete** to remove selected nodes/edges
* Click **Auto Layout** to arrange the nodes neatly
* Observe **DAG Validation Status** at the bottom of the screen

---

## 🌐 Demo

> [Live Site on Vercel / Netlify](https://your-live-demo-link.com)

---

## 📹 Demo Video (Optional)

> Upload your screen recording to Loom or YouTube and paste the link here

---

## 💡 Key Design Decisions

* Used a modal for better UX over native `prompt()`
* Leveraged `dagre` for clean layout generation
* Modularized all logic and visual elements into separate files
* Enhanced CSS for a professional, engaging experience

---

## 📚 References

* [React Flow Docs](https://reactflow.dev/docs)
* [DAG Validation via DFS](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
* [Dagre Layout](https://github.com/dagrejs/dagre)

---

## ✨ Bonus Ideas (Optional Extensions)

* Add right-click context menu for nodes
* JSON panel to show nodes/edges structure
* Dark mode toggle
* Export/import DAG as JSON

---

## 👨‍💻 Developed By

**Sai Chandan Gundaboina**

* [LinkedIn](https://www.linkedin.com/in/saichandanyadav/)
* [GitHub](https://github.com/your-username)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

