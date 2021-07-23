import react from 'react';
import photoOne from '../../assets/nat-5.jpg'
import photoTwo from '../../assets/nat-6.jpg'
import photoThree from '../../assets/nat-7.jpg'

export default function AboutImages() {
    return (
        <div className="col-1-of-2">
            <div className="composition">
                <img src={photoOne} alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img src={photoTwo} alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img src={photoThree} alt="Photo 3" className="composition__photo composition__photo--p3" />
            </div>
        </div>
    )
}