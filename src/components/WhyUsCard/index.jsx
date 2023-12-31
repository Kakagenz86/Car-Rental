import React from "react";
import './style.css'

let WhyUsCard = (props) => {
    return (
        <div className="container" id="WhyUs">
                <div className="row whyus" >
                        <h2 className="whyus-text">Why Us?</h2>
                        <p className="whyus-p">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="col-lg-12 col-md-12 col-sm-12 whyus-content">
                        {props.data.map((WhyUs) => (
                            <div className="whyus-box">
                                <i className={WhyUs.icons}></i>
                                <p className="whyus-title">{WhyUs.title}</p>
                                <p className="whyus-desc">{WhyUs.description}</p>
                            </div>
                            ))}
                    </div>
                </div>
        </div>
    )
}

export default WhyUsCard