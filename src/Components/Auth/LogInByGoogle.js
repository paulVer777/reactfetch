import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import PaperRefined from "../PaperRefined";


const LoginByGoogle = (props) => (


    <PaperRefined>

        <RaisedButton

            secondary={true}
            label={'Log in by google'}
            onClick={props.onLogInClick}


        />

    </PaperRefined>


)

export default LoginByGoogle