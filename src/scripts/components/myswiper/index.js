


import "../../utils/swiper-3.3.1.min.js";

import React,{Component} from "react";

export default class MySwiper extends Component{
    render(){
        const {className,id,children} = this.props;
        console.log(children)
        return (
            <div className={"swiper-container  "+className} id={id}>
                <div className="swiper-wrapper">
                    {
                        children.map((child,idx)=>{
                            return (
                                <div className="swiper-slide" key={idx}>
                                    {child}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        // console.log(this.props.children)
        console.log("did mount")
        const {id,swiperOptions} = this.props;

        new Swiper(`#${id}`,swiperOptions);
    }

    componentDidUpdate(){
        // console.log(this.props.children)
        const {id,swiperOptions} = this.props;

        new Swiper(`#${id}`,swiperOptions);
    }
} 
