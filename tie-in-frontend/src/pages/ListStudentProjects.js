import {useQuery} from "@tanstack/react-query";
import {requestStudentProjects} from "../api/studentProject";

function ListStudentProjects() {

    const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects())
        if (requestStudentProject.isLoading) {
            return <span>Loading...</span>
        }

        if (requestStudentProject.isError) {
            return <span>Error: {requestStudentProject.error.message}</span>
        }

    return (
        <ul className={"studentProject"}>
            {requestStudentProject.data.map((studentProject) => (
                <li key={studentProject.id}>
                    <h1> Project Name: {studentProject.name}</h1>
                    <h3>Description:</h3>
                    <p>{studentProject.description}</p>
                    <h3>LinkedIn: </h3>
                    <p>{studentProject.linkedIn_url}</p>
                    <h3>Status: </h3>
                    <p>{studentProject.approval_status}</p>
                    <h3>Tags: </h3>
                    <p>{studentProject.tags}</p>
                    <h3>Deadline:</h3>
                    <p>{studentProject.start_date} - {studentProject.end_date}</p>
                    <h3>Tech:</h3>
                    <p>{studentProject.technology}</p>
                    <h3>Institution:</h3>
                    <p>{studentProject.institution}</p>
                    <h3>Instructor Email:</h3>
                    <p>{studentProject.instructor_email}</p>
                </li>
            ))}
        </ul>
    );
}

export default ListStudentProjects;
