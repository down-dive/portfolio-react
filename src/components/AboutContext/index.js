import React from 'react';

import AboutImages from '../AboutImages'

export default function HeroContext() {
    return (
        <div class="row">
        <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">Short introduction</h3>
            <p class="paragraph">
            Front End Web Developer with a background in customer service and sales in particular. Trained 👩‍🎓 at the UC Berkley Coding Bootcamp and earned a Certificate in Full Stack Web Development. Innovative problem-solver passionate about developing apps.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
            <p class="paragraph">
            Very social, team oriented person. My main super power is in the ability to overcome issues in the most efficient and strategic way. Love learning new processes and discovering new tools to insure achievement of any types of goals whether its a personal of a professional.
            </p>
        </div>
        <AboutImages />
    </div>
    )
}