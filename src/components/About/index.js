import photoOne from '../../assets/nat-5.jpg'
import photoTwo from '../../assets/nat-6.jpg'
import photoThree from '../../assets/nat-7.jpg'

function About() {
  return (
    <section className="section-about" id="about" className='about'>
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
            Very social, team oriented person. My main super power is in the ability to overcome issues in the most efficient and strategic way. Love learning new processes and discovering new tools to insure achievement of any types of goals whether its a personal of a professional.
            </p>
        </div>
        <div className="col-1-of-2">
            <div className="composition">
                <img src={photoOne} alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img src={photoTwo} alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img src={photoThree} alt="Photo 3" className="composition__photo composition__photo--p3" />
            </div>
        </div>
    </div>
</section>
  );
}

export default About;