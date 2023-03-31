import React from 'react';


const PortfolioList = ({title,active,setSelected,id}) => {
  return (
    <li className={active ? "Portfolio active" : "Portfolio"} onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList