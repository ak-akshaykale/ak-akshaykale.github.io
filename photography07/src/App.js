

import React from 'react';
import './App.css';
import ImageViwer from './ImageView/ImageViewer';



function App() {

  const [showMenu, setHideMenu] = React.useState(false)

  const [imgs, setImgs] = React.useState([]); 
  
  React.useEffect(()=>{
    const newImages = importAll(require.context('/public/gallary', true, /\.(png|jpe?g|svg|apng|bmp|gif|webp)$/));
    setImgs(newImages);
    // setImgs([{ key:'fst', url : '/static/media/Project K.326837ea868124a0f592.jpg', title : 'project'}])
  },[]);

  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

    Object.keys(images).forEach((key)=>{
      images.push({key : key, url : images[key], title : key});
    });
    return images;
  }

  return (
    <div className="App">
      <div className={"sidebar"+(showMenu ? " open" : '')} id="mySidebar">
        <a href="#work" className="bar-item">Work</a>
        <a href="#about" className="bar-item">About</a>
        <a href="#contact" className="bar-item">Contact</a>
      </div> 
      <div className='logo'>
          Garuda Production
          <span className='sub-title'>Photography | Videography</span>
      </div>
      <button className="menu" onClick={()=>setHideMenu(!showMenu)}>☰</button>
      <div className='container'>
        {imgs.length > 0 ? imgs.map((item,index)=>{
            return (<ImageViwer ikey={item.key+index} url={item.url} title={item.title} />);
          }) : <span className='no-photos'>No Photographs uploaded yet ☹</span>
        }
      </div>
      <div>
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <input type="submit" />
      </div> 
      <footer>
        <span className='copyright'>© 2017</span>
      </footer>
    </div>
  );
}

export default App;
