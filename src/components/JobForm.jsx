import "./../css/JobForm.css";

const JobForm = () => {
    return (
        <div id="job-app-form" className="two">
            <form id="careers-form">
                <label for="full-name">Enter full name:</label><br/>
                <input type="text" id="full-name" name="full-name" required/><br/><br/>

                <label for="email">Enter e-mail:</label><br/>
                <input type="email" id="email" name="email" required autoComplete="email"/><br/><br/>

                <label for="resume">Attach resume (optional)</label><br/>
                <input type="file" id="resume" name="resume"/><br/><br/>

                <label for="applicant-info">Enter skills and availability:</label><br/>
                <textarea id="applicant-info" name="applicant-info" cols="25" rows="4" required></textarea><br/><br/>

                <input type="submit" value="Submit Application"/>
            </form>
        </div>
    );
};

export default JobForm;