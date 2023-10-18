import ProjectList from "../components/ProjectList";
import CreateAProject from "../components/CreateProject";
import { useParams } from "react-router-dom";
const ProjectPage = () => {
  const user_id = useParams();
  return (
    <>
      <ul>
        <li>
          <ProjectList></ProjectList>
        </li>
      </ul>
      <CreateAProject userID={user_id}></CreateAProject>
    </>
  );
};

export default ProjectPage;
