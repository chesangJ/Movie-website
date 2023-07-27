import React,{useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import{Carousel} from "react-responsive-carousel";
import { getCategories } from "../../utills/utilities";
import ImageContainer from "../../atoms";
import "./style.css"

const MovieLists=()=>{
    const[movies,setMovies]=useState([]);
    const[loading,setLoading]=useState(false);
}
