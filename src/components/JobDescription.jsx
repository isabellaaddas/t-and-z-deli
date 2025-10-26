import "./../css/JobDescription.css";
import jobExPic from "./../images/job-example.jpg";

const JobDescription = () => {
    return (
        <div id="job-desc" className="three">
            <h2>Job Description</h2>

            <div id="job-img"><img src={jobExPic}/></div>

            <p>Working at T & Z Deli entails a strong commitment to serving the community and delivering the best quality to every customer who walks in. Our employees will be trained in every area of the store (with exceptions for minors). Any employee should be able to reasonably lift at least 20lbs for deliveries and inventory changes. All employees will be able to make any kind of sandwich fit to our standard of taste; any employee should also have customer service skills for any customer-facing position they might fill. Everyone who works for us becomes a part of the T & Z crew, treated like family even after they move on. Employees get paid weekly for convenience.</p>
        </div>
    );
};

export default JobDescription;