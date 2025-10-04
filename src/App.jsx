import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(selectedProjectId) {
    setProjectsState((state) => ({
      ...state,
      selectedProjectId,
    }));
  }

  function handleStartAddProject() {
    setProjectsState((state) => ({
      ...state,
      selectedProjectId: null,
    }));
  }

  function handleCancleProject() {
    setProjectsState((state) => ({
      ...state,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(project) {
    setProjectsState((state) => ({
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

  function handleDeleteProject(projectId) {
    setProjectsState((state) => ({
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter((p) => p.id !== projectId),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onStartAddProject={handleStartAddProject}
        onAdd={handleAddProject}
        onCancel={handleCancleProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
