"use client"
import { Box, Button, Container } from "@mui/material";

import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MainSlider = () => {
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
                    padding: " 0 10px",
                },
                "h3": {
                    border: "1px solid #ccc",
                    height: "200px",
                    padding: "20px",
                }
            }}>
                <div className="slider-container">
                    <h2>Mutiple Track</h2>
                    <Slider {...settings}>
                        <div className="slide-item">
                            <h3>1</h3>
                        </div>
                        <div className="slide-item">
                            <h3>2</h3>
                        </div>
                        <div className="slide-item">
                            <h3>3</h3>
                        </div>
                        <div className="slide-item">
                            <h3>4</h3>
                        </div>
                        <div className="slide-item">
                            <h3>5</h3>
                        </div>
                        <div className="slide-item">
                            <h3>6</h3>
                        </div>
                        <div className="slide-item">
                            <h3>7</h3>
                        </div>
                        <div className="slide-item">
                            <h3>8</h3>
                        </div>
                        <div className="slide-item">
                            <h3>9</h3>
                        </div>
                    </Slider>
                </div>
            </Box>


        </Container>
    )
}
export default MainSlider;