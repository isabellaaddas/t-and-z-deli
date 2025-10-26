import "./../css/Careers.css";
import JobForm from "./../components/JobForm";
import JobDescription from "./../components/JobDescription";

const Careers = () => {
    return (
        <main id="careers" className="columns">
            <JobForm />

            <JobDescription />
        </main>
    );
};

export default Careers;