import React,{Component} from 'react';
export default class DefaultLayout extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultValue:'1',
        };
    }
    render(){
        return(
            <div id="DefaultLayout">
                hello wrold
            </div>
        )
    }
} 