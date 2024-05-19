import React, { Component } from 'react'
import background from '../../assets/background-1.png'

class content extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div className="card mt-4">
                 <img src={Logo} alt="" height="800px" width="1200px" />
              {/*   <div className="card-body">
                    <div className="col-md-12">
                        <div style={{ padding: 16 + 'px' }} className='title text-center'>
                            <h3> Quem somos </h3>
                            <div className='content'> ,

                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        )
    }
}
export default About;