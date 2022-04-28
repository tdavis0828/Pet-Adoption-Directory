import data from "../data.json";
import Table from "../Table";
import './About.css'




const About = () => {
    return (
      <Table pets={data} />
    )
}


export default About