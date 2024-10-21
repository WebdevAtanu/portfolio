import Intro from './Intro';
import Project from './Project';
import Skill from './Skill';

function Nav() {
	return (
    <div role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Intro" defaultChecked/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <Intro/>
      </div>
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Projects" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <Project/>
        </div>
      </div>
	)
}

export default Nav