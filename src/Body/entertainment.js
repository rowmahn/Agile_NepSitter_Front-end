import React, { Component } from 'react'
import '../style/entertainment.css'

export default class Entertainment extends Component {
    render() {
        return (
            <div className="entertainment">
                <div className="d-flex">
                    <div className="p-2 flex-fill"><h2>1. FOR KIDS</h2>
                    <div className="iframe-container">
                        <iframe src="https://www.youtube.com/embed/Cuzv1mYU_4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aq3r1Spge5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YBEOJ937spU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="p-2 flex-fill"><h2>2. FOR PETS</h2>
                    <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/07d2dXHYb94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_47YuxrbMgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RBRXi05fQ38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="p-2 flex-fill"><h2>3. STORYTIME</h2>
                    <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6kZbVIAS6NA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r1MOsyaNkZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ValXDhGwn9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}
