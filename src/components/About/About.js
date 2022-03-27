import './About.css';

function About() {
  return (
    <div className='aboutContainer'>
        <span className='aboutParagraph'>
          Hello.
        </span>
        <span className='aboutParagraph'>
          My name is Theo Radicella and I'm an experienced Full stack developer based in Buenos Aires, Argentina.
        </span>

        <span className='aboutParagraph'>
          I'm currently working full-time for <a className='clevertechLink' href='https://www.clevertech.biz/'>Clevertech</a>, a US based company with international projects where I've contributed with my work in three of them, inside the internal team and in two client projects.
        </span>

        <span className='aboutParagraph'>
          The internal Clevertech team works on a complex set of applications that includes all client, project, hires and employees management systems.
        </span>

        <span className='aboutParagraph'>
          I then shifted to my first client project inside the company, <a className='coreLink' href='https://www.corebt.com/'>Core</a>.
        </span>
        <span className='aboutParagraph'>
          Core is an expert company in end-to-end payment solutions, revenue management and customer engagement. They help both the US goverment and the healthcare system with its citizen revenue management.
        </span>
        <span className='aboutParagraph'>
          Finally, I joined <a className='levadataLink' href='https://levadata.com/'>Levadata</a>'s team.
        </span>
        <span className='aboutParagraph'>
        Levadata is an Artificial Intelligence company with important clients such as Lenovo, IBM, or Zebra. It powers the smartest supply chains in the world. Their Cognitive Supply Management platform analyzes your procurement objectives alongside real-time market activity to generate predictions and customized recommendations.
        </span>

        
    </div>
  );
}

export default About;
