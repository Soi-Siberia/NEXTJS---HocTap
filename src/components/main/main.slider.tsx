"use client"
import { Box, Button, Container } from "@mui/material";

import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";

interface IProps {
    data: ITrackTop[];
}

const MainSlider = (props: IProps) => {
    console.log('MainSlider props:', props.data);
    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <Button variant="outlined"
                onClick={onClick}
                sx={{
                    position: "absolute",
                    right: "-15px",
                    top: "50%",
                    zIndex: 2,
                    minWidth: "30px",
                    width: "35px",

                }} >
                <ChevronRightIcon />
            </Button >
        );
    }

    const SamplePrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <Button variant="outlined"
                onClick={onClick}
                sx={{
                    position: "absolute",
                    left: "-15px",
                    top: "50%",
                    zIndex: 2,
                    minWidth: "30px",
                    width: "35px",
                }} >
                <ChevronLeftIcon />
            </Button >
        );
    }


    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };

    return (
        <Container>

            <Box sx={{
                margin: "0 50px",
                borderBottom: "1px solid #ccc",
                ".slide-item": {
                    // border: "1px solid #ff0000ff",
                    height: "auto",
                    padding: " 0 10px",
                    textAlign: "center",

                    ".img-box": {
                        // border: "1px solid #00ff00ff",
                        height: "80%",
                    },

                    ".info-box": {
                        // border: "1px solid #0000ffff",
                        height: "20%",
                        margin: "15px 0px",

                        "a": {
                            textDecoration: "none",
                            color: "black",
                        },

                        "h3": {
                            margin: "0px",
                        },
                    }
                },
                // "h3": {
                //     border: "1px solid #ccc",
                //     padding: "20px",
                // }
            }}>
                <div className="slider-container">
                    <h2>Mutiple Track</h2>
                    <Slider {...settings}>

                        {
                            props.data && props.data.length > 0 ? (
                                props.data.map((item, index) => (
                                    <div key={item._id || index} className="slide-item">
                                        <div className="img-box">
                                            <img
                                                src={item.imgUrl || "/img/no_img.png"}
                                                alt={item.name || "noname"}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="info-box">
                                            <Link href={`/track/${item._id}?audio=${item.name}`} >
                                                <h3>{item.name}</h3>
                                            </Link>
                                            <h3>{item.genre}</h3>
                                        </div>

                                    </div>
                                ))
                            ) : (<p>No data available</p>)
                        }



                        {/* <div className="slide-item">
                            <div className="img-box">img1</div>
                            <h3>Tên bài hát1</h3>
                            <h3>Thể Loại1</h3>
                        </div>
                        <div className="slide-item">
                            <div className="img-box">img2</div>
                            <h3>Tên bài hát2</h3>
                            <h3>Thể Loại2</h3>
                        </div>
                        <div className="slide-item">
                            <div className="img-box">img3</div>
                            <h3>Tên bài hát3</h3>
                            <h3>Thể Loại3</h3>
                        </div>
                        <div className="slide-item">
                            <div className="img-box">img4</div>
                            <h3>Tên bài hát4</h3>
                            <h3>Thể Loại4</h3>
                        </div>
                        <div className="slide-item">
                            <div className="img-box">img5</div>
                            <h3>Tên bài hát5</h3>
                            <h3>Thể Loại5</h3>
                        </div> */}

                    </Slider>
                </div>
            </Box>


        </Container>
    )
}
export default MainSlider;