import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.jpg"
import '../css/testcss.css'

export default function TestHome() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale,setScale] = useState(1);
  const [blurcount,setblur]=useState(0);
  const [opacityCount,setOpcaity]= useState(0);

  

  const images = [
    "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://www.justspices.co.uk/media/magefan_blog/shutterstock_1048511935.jpg",
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg"

  ];

  useEffect(()=>{
     const interval = setInterval(()=>{
         setCurrentIndex((prev)=>(prev+1)%images.length);
     }, 3000)

     return ()=> clearInterval(interval);
  },[])

  useEffect(()=>{
    setScale(1);
      const scaleTimeOut = setTimeout(()=>{
           setScale(1.2);
      },500)

      return ()=> clearTimeout(scaleTimeOut);
  },[currentIndex]);

  useEffect(()=>{
     setblur(0)
      const blurTimeOut = setTimeout(()=>{
            setblur(5);
      },1000)
  },[currentIndex])

  useEffect(()=>{
    setOpcaity(0);
    const opacityTimeOut = setTimeout(()=>{
          setOpcaity(1);
    },1000)

    return ()=> clearTimeout(opacityTimeOut);
  },[currentIndex])



   
  return (
    <div>
       <div className=' absolute inset-0 mt-10 -z-10 bg-cover bg-center h-[60vh] transition-all duration-1000 ease-in-out transform ' style={{backgroundImage:`url(${images[currentIndex]})`,
          filter: `blur(${blurcount}px)`,
          
      }}>

       </div>

       
        <div className=' h-[55vh] flex  justify-center items-center transition-all duration-1500 ease-in-out ' style={{opacity:`${opacityCount}`}}>
          <table >
            <tr>
              <th>col1</th>
              <th>col2</th>
              <th>col3</th>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data2</td>
              <td>data3</td>
            </tr>

          </table>
          
       </div>

      

    


    </div>
  )
}
