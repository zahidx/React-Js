import React,{Component} from "react";

class Baby extends Component{
    DoThisClass(a){
        alert(a);

    }
    render(){
        return( 
            <div className='main-div' >
                <button className='btn btn-primary ' onClick={this.DoThisClass.bind(this,"I am from para..")} >Click me from class</button>
            <h1>My name is Zahid</h1>
            <h1>I am from {this.props.name}</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, neque?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident et autem harum repellat dolorum omnis debitis quas nobis p asperiores esse blanditiis facilis neque, adipisci accusamus sed dicta perspiciatis quidem quas minus repellendus ullam explicabo repudiandae reprehenderit? Voluptates, velit id!

            </p>
            </div>
        )};

}
export default Baby;