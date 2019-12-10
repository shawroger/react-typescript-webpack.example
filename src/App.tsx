import * as React from 'react';


interface IProps {
	age: number;
}
export default function App(props: IProps) {  

    return ( 
        <>
            <a href="http://www.google.com/">{props.age}</a>
        </>
    );
}

App.defaultProps = {
	age: '2333'
}