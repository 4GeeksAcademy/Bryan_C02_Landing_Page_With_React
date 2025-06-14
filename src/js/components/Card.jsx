import React from "react";

const Card = ({image, title, text, buttonLabel}) => {
    return (
                <div className="col">
                    <div className="card h-100 text-center">
                        <img src={image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{text}</p>
                            </div>
                            <div className="card-footer bg-white border-0">
                                <a href="#" className="btn btn-primary">{buttonLabel}</a>
                            </div>
                    </div>
                </div>
    );
};

export default Card;