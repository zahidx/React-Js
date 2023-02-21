import React from 'react';

function Hello(props) {
    function DoThis(a){
        alert(a);

    }
    return(
        <div className='main-div' >

            <button className='btn btn-danger' onClick={DoThis.bind(this,"I am from para..")} >click me</button>
         <h1>My name is {props.name}</h1>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, neque?</h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia atque alias iusto exercitationem, voluptates esse eum assumenda non consequatur, obcaecati debitis saepe tempore quasi vitae et veritatis asperiores eius cupiditate voluptatum! Obcaecati autem perspiciatis quasi fugit est eligendi ad iusto quam tenetur quod exercitationem repellendus rem sequi voluptates, adipisci at reprehenderit deserunt voluptate. Sequi velit, sed aliquam provident esse cum veritatis ullam vitae! Deserunt consequuntur, aliquam ipsum corporis obcaecati molestias illo harum quas delectus atque temporibus laudantium. Repellat pariatur laborum unde tempore libero provident, quos dignissimos ipsum, culpa harum velit id numquam vel dolore. Voluptates aperiam harum mollitia sint a!</p>
     </div>
    );

    }

 export default Hello;


