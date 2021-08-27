import photoOne from '../../assets/covers/FAMILY.PNG.'
import photoTwo from '../../assets/covers/OCULUS.PNG'
import photoThree from '../../assets/covers/ME.PNG'

function About() {
  return (
    <section className="section-about" id="about">
        <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
       Getting to know me
        </h2>
    </div>
    <div class="row">
        <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">The secret of getting ahead is getting started</h3>
            <p class="paragraph">
            Front End Web Developer with a background in customer service and sales in particular. Trained 👩‍🎓 at the UC Berkley Coding Bootcamp and earned a Certificate in Full Stack Web Development. Innovative problem-solver passionate about developing apps.
            </p>
            <p class="paragraph">
            Very social, team oriented person, with ability to figure out and learn new processes and adapt to any changes. Hands on experiences in React, Express.js, Mongoose, Node.js, JavaScript, HTML, Advanced CSS, API's and much more.
            </p>
        </div>
        <div className="col-1-of-2">
            <div className="composition">
                <img src={photoOne} alt="my picture" className="composition__photo composition__photo--p1" />
                <img src={photoTwo} alt="my family" className="composition__photo composition__photo--p2" />
                <img src={photoThree} alt="me wearing oculus headset" className="composition__photo composition__photo--p3" />
            </div>
        </div>
    </div>
</section>
  );
}

export default About;