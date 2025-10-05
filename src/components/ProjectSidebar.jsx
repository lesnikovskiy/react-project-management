import Button from './Button';

export default function ProjectSidebar({
  projects,
  selectedProjectId,
  onSelectProject,
  onStartAddProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

            if (project.id === selectedProjectId) {
              cssClasses += ' bg-stone-800 text-stone-200';
            } else {
              cssClasses += ' text-stone-400';
            }

            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
