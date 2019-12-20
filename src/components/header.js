import React from 'react';
import './header.css'
 import { Carousel} from 'antd';
 import { MdSearch } from "react-icons/md";
 import 'antd/dist/antd.css';

import Fade from 'react-reveal/Fade';

const Header  = () => {
  return <div className='c1'>
  <div className='a1 container-fluid'>
   <Fade left>
<div className='text-center a8'><i class="fa fa-graduation-cap" style={{ "margin": "7px"}}></i>IAS<span className='a7'>Bano</span>

<button className='float-right btn-sm btn-info a2'>Login</button>
<button className='float-right btn-sm btn-info a2 '>Page3</button>
<button className='float-right btn-sm btn-info a2'>Page2</button>
<button className='float-right btn-sm btn-info a2'>Page1</button>
</div>
      </Fade>
  </div>


  <div id="carouselExampleFade" className="carousel slide carousel-fade a4" data-ride="carousel">
  <div className="carousel-inner a6">
    <div className="carousel-item active">
      <img src="https://photoartinc.com/wp-content/uploads/2018/02/inspiring-cover-photos-5.jpg " class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src=" https://i.pinimg.com/originals/b2/34/61/b2346113cdc5873d9a55c227d263bd7f.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  </div>
}
export default Header;
