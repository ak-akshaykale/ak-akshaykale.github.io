
import './ImageViewer.css'

function ImageViwer(props) {
    return (
      <div key={'box-'+props.ikey} className='box'>
        <div key={'imgBox-'+props.ikey} className="imgBox">
          <img key={'img-'+props.ikey} src={props.url} alt={props.title?.split('.')[0]} width={400}/>
        <div key={'box-text-'+props.ikey} className='hovertext'>
         {props.title?.split('.')[0]}
        </div>
        </div>
      </div>
   );
}


export default ImageViwer;


/*
 <li id="el23" className="thumb project">
    <a href="/projects/7267446">
      <img className="thumb-img" src="https://carbon-media.accelerator.net/0000000hUT4/63eeBgCaFOSaZUAwlV8tCz;406x739.jpeg?auto=webp" alt=''/>
      <div className="thumb-title">
        
        <div className="thumb-center">
          <h2>MERO</h2><br/>
        </div>
      </div>
    </a>
  </li>
*/

/* <div className='full-screen'>
<div className="grid">
  <div className="item">
    <p>Cupcakes</p>
    <div className="img-wrapper">
      <img src='https://carbon-media.accelerator.net/0000000hUT4/63eeBgCaFOSaZUAwlV8tCz;406x739.jpeg?auto=webp' alt='cupcake on yellow background' />
    </div>
  </div>
  <div className="item">
    <p>Muffins</p>
    <div className="img-wrapper">
      <img src='https://carbon-media.accelerator.net/0000000hUT4/63eeBgCaFOSaZUAwlV8tCz;406x739.jpeg?auto=webp' alt='Muffins' />
    </div>
  </div>
  <div className="item">
    <p>Cookies</p>
    <div className="img-wrapper">
      <img src='https://carbon-media.accelerator.net/0000000hUT4/63eeBgCaFOSaZUAwlV8tCz;406x739.jpeg?auto=webp' alt='Cookies' />
    </div>
  </div>
  <div className="item">
    <p>Pastries</p>
    <div className="img-wrapper">
      <img src='https://carbon-media.accelerator.net/0000000hUT4/63eeBgCaFOSaZUAwlV8tCz;406x739.jpeg?auto=webp' alt='pain au chocolat' />
    </div>
  </div>
</div>
</div> */