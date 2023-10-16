export default function ProjectCard({ project }) {
  project = project.id;
  return (
    <>
      <h1>Title: {project.project_name}</h1>
      <h2>User {project.user_id}</h2>
      <p>Description{project.project_description}</p>
      <p>Hook {project.hook_size}mm</p>
    </>
  );
}
