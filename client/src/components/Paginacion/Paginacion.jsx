import React from "react";
import "./Paginacion.css"

export const Paginacion = ({totalPosts, postPerPage, setCurrentPage}) => {

let pages = []
for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
    pages.push(i)
}

    return (
        <div className="container-page">
            {pages.map((page,index)=>{
                return <button className="botones" key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
            })}
        </div>

    )
}
