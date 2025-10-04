import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';

function App() {
  const [projectsState, setProjectstate] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectstate((state) => ({
      ...state,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(project) {
    setProjectstate((state) => ({
      ...state,
      selectedProjectId: undefined,
      projects: [
        ...state.projects,
        {
          ...project,
          id: Math.random(),
        },
      ],
    }));
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onStartAddProject={handleStartAddProject}
        onAdd={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
