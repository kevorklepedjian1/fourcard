
import './index.css';
import img from './images/icon-supervisor.svg'
import img1 from './images/icon-team-builder.svg'
import img2 from './images/icon-karma.svg'
import img3 from './images/icon-calculator.svg'

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={icon} alt="" />
    </article>
  );
}

function App() {
  return (
    <div>
      <main>
        <article>
          <h1><span>Reliable, efficient delivery</span> Powered by Technology</h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project data
            points to ensure that your project is successful
          </p>
        </article>

        <div className="cards">
          <Card title="Supervisor" description="Monitors activity to identify project roadblocks" icon={img} />
          <Card title="Team Builder" description="Scans our talent network to create the optimal team for your project" icon={img1} />
          <Card title="Karma" description="Regularly evaluates our talent to ensure quality" icon={img2} />
          <Card title="Calculator" description="Uses data from past projects to provide better delivery estimates" icon={img3} />
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a>. Coded by <a href="https://tsbsankara.com">Kevork Lepedjian</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
