import React from "react";
import { Appbar } from 'react-native-paper'

const MainAppbar = (props) => {

    return (
        <Appbar.Header
            mode="center-aligned"
            elevated={true}
        >
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    )
}

export default MainAppbar