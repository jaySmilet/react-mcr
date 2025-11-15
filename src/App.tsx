import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Accordions from "./pages/Accordions";
import Navbar from "./components/Navbar/Navbar";
import EmiCalculator from "./components/emi-calculator/emi-calculator";
import StarRating from "./components/StarRating/StarRating";
import ProgressBarPage from "./pages/ProgressBarPage";
import FolderStructure from "./components/FolderStructure/FolderStructure";
import { folderData } from "./static-data";
import type { Folder } from "./static-data";

function App() {
  // hold the folder tree in state so toggles are persisted and
  // behave like VS Code's explorer (single source of truth)
  const [tree, setTree] = React.useState<Folder>(folderData);

  const toggleAtPath = (path: string[]) => {
    const update = (node: Folder, remaining: string[]): Folder => {
      if (remaining.length === 0) {
        return { ...node, isFold: !node.isFold };
      }
      const [next, ...rest] = remaining;
      return {
        ...node,
        children: node.children
          ? node.children.map((child) =>
              child.name === next ? update(child, rest) : child
            )
          : undefined,
      };
    };
    setTree((prev) => update(prev, path));
  };

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordions />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route path="/progress-bar" element={<ProgressBarPage />} />
        <Route
          path="/folder-structure"
          element={
            <FolderStructure
              folderStructure={tree}
              path={[]}
              onToggle={(p: string[]) => toggleAtPath(p)}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
