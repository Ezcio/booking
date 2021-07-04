import React, { Component, useEffect, useState } from "react"

const withMousePosition = (WrappedComponent) =>{

    function Hoc(props){
        
        const [mouseX, setMouseX] = useState(0);
        const [mouseY, setMouseY] = useState(0);

        useEffect(() =>{
            document.body.addEventListener('mousemove', updateMousePosition)
        },[])

        const updateMousePosition = (e) => {
            setMouseX(e.pageX)
            setMouseY(e.pageY)
            
        }

        return(
            <WrappedComponent
                mouseX = {mouseX}
                mouseY = {mouseY}
                {...props}
            />
        )

    }
    return Hoc
}
//     class Hoc extends Component{

//         state = {
//             mouseX:0,
//             mouseY:0
//         }
        
//         componentDidMount(){
//             document.body.addEventListener('mousemove', this.updateMousePosition.bind(this))
//         }

//         updateMousePosition = (e) =>{
//             this.setState({
//                 mouseX: e.pageX,
//                 mouseY:e.pageY
//             })
//         }

//         render(){
//             return (
//                 <WrappedComponent
//                 mouseX = {this.state.mouseX}
//                 mouseY = {this.state.mouseY}
//                 {...this.props}
//                 />
//                 )
//             }
//         }
//     return Hoc
// }
export default withMousePosition