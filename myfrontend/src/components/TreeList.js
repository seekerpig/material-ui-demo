import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import {useRouteMatch, useHistory} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 500,
        minWidth:210,
        margin: "0 2rem 0 0",
    },
});

function TreeList({onPageChange}) {
    const classes = useStyles();
    let {path} = useRouteMatch();
    const history = useHistory();
    const handleOnClick = (e) => {
        history.push(`${path}/${e.target.innerText.toLowerCase().replace(/\s/g, "")}`);
        onPageChange(e.target.innerText);
    };

    return (
        <TreeView
            className={classes.root}
            defaultEndIcon={<ChevronRightIcon />}
        >
            <TreeItem nodeId="1" label="Overview" onLabelClick={(e) => handleOnClick(e)}/>
            <TreeItem nodeId="2" label="Keep Track Of Students" onLabelClick={(e) => handleOnClick(e)}/>
            <TreeItem nodeId="3" label="Calendar Scheduling" onLabelClick={(e) => handleOnClick(e)}/>
            <TreeItem nodeId="4" label="Automatic Reminders" onLabelClick={(e) => handleOnClick(e)}/>
            <TreeItem nodeId="5" label="Online Payments" onLabelClick={(e) => handleOnClick(e)}/>
        </TreeView>
    );
}

export default TreeList;
