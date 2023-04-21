import React from 'react'
// import home from '../styles/home.scss'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} 
from "react-icons/ai" ;
function Home() {
  return (
    <>
      <div className='home' id='home'>
        <main><h1>TechyStar</h1>
          <p>Solution to all your problems</p></main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugiat quos. In iusto dolorum qui illum fugiat tenetur recusandae cupiditate blanditiis. Maxime perspiciatis, asperiores labore illo error, quae aliquid, magnam velit iste ratione non.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p> exercitationem repellat accusamus numquam saepe, tempore dolores id quos ipsa, 
            repudiandae eaque eum, magni voluptates. Possimus provident, quae accusamus aut
            
             deserunt corrupti minus dignissimos illum officiis rerum numquam eaque sequi iusto!
              Hic nesciunt inventore eos nemo corporis delectus, ducimus quod a beatae voluptas 
              doloremque est expedita totam tenetur, quia sequi optio aperiam. Corporis, iure ipsa 
              porro quibusdam quos cum ipsum eos aperiam provident ex laboriosam fugit optio aliquam 
              
              tenetur, doloribus, nisi sequi repudiandae nam mollitia. Aperiam incidunt mollitia sed 
              tempora itaque? Dolore assumenda consequuntur placeat temporibus ea voluptates delectus
               maiores explicabo omnis error repellat molestias unde veritatis ex velit impedit quod
                eaque quisquam distinctio, officia numquam adipisci nihil facilis maxime? At amet
                 asperiores placeat quaerat accusantium sapiente dolor nam fuga velit consequatur
                  esse modi aliquam facere culpa ipsam consequuntur aperiam odit, optio recusandae 
                  molestiae totam sint nemo. Placeat quo eos odio modi dolore odit nemo, quae, veritatis 
                  labore harum iusto molestiae eaque natus corporis totam. In, numquam culpa quaerat iure
                   officiis obcaecati explicabo veniam velit. Autem laboriosam maxime dolor voluptatum tempora eos, tempore 
                   cupiditate, totam mollitia animi doloremque, blanditiis reiciendis est
                   iusto adipisci quaerat commodi nobis a enim unde accusamus.</p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
<div style={{animationDelay:".3s"}}>
 < AiFillGoogleCircle/>
 <p>Google</p>
</div>
<div style={{animationDelay:".5s"}}>
 < AiFillAmazonCircle/>
 <p>Amazon</p>
</div>
<div style={{animationDelay:".7s"}}>
 < AiFillYoutube/>
 <p>Youtube</p>
</div>
<div style={{animationDelay:".1s"}}>
 < AiFillInstagram/>
 <p>Instagram</p>
</div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home