import trait from "../assets/img/trait.svg";
import technique from "../assets/img/skill1.svg";
import skill from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.svg";
import skill4 from "../assets/img/skill4.svg";
import trait2 from "../assets/img/trait.svg";
import cosmo from "../assets/img/cosmo.svg";
import work from "../assets/img/work.svg";
import vert from "../assets/img/vert.svg";
import milk from "../assets/img/milk.svg"
import machine from "../assets/img/machine.svg"
import bleu from "../assets/img/bleu.svg"


const Competences = () => {
  return (
      <div>
      <p className="text-white ml-12 mt-16 text-4xl ">Compétences</p>
      <img className="ml-12 mt-4" src={trait} alt="" />
      <p className="text-white px-10 mt-4">It doesn’t matter how great your product or service is if your copy does not captivate your audience.</p>
      <div className="ml-4"><img className=""  src={technique} alt=""  />
      </div>
      <h4 className="text-white ml-8  ">Technique</h4>
      <p className="text-white px-8 mt-2 ">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      <img className="ml-4" src={skill} alt="" />
      <h4 className="text-white ml-8">Gestion de projet</h4>
      <p className="text-white px-8 mt-4" >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
      <img className="ml-4" src={skill3} alt="" />
      <h4 className="ml-8 text-white ">Management</h4>
      <p className="text-white px-8 mt-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
      <img className="ml-4" src={skill4} alt="" />
      <h4 className="text-white ml-8 ">Langues</h4>
      <p className="text-white px-8 mt-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
      <h6 className="text-white text-4xl mt-16 ml-10">Portfolio</h6>
      <img className="ml-12 mt-4" src={trait} alt="" />
      <p className="text-white px-10 mt-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t matter how great your product or service is if your copy does not captivate your audience.</p>
      <img className="ml-10 mt-8" src={cosmo} alt="" width={313} height={171}/>
      <img className="ml-10 mt-8" src={work} alt=""  />
      <img className="ml-10 mt-8" src={vert} alt="" />
      <img className="ml-10 mt-8" src={milk} alt="" />
      <img className="ml-10 mt-8" src={machine} alt="" />
      <img className="ml-10 mt-8" src={bleu} alt="" />
      </div>
      
 
 
 
    ); 
    };

    export default Competences;
