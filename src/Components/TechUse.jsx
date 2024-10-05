import React from "react";
import GetTechIcon from "./GetTechIcon";
import { IconButton, Tooltip } from "@mui/material";
import { GgMore } from "./Icons";

export default function TechUse({ techArray, show, showMoreIcon }) {
    return (
        <div className="tech-use">
            {techArray.map((tech, index) => (
                <div key={index} className="d-flex items-center ">
                    <Tooltip title={tech}>
                        <IconButton
                        className="p-0"
                        sx={{
                            backgroundColor: "transparent",
                            "&:hover": {
                            backgroundColor: "transparent",
                            },
                        }}
                        >
                        <span>{GetTechIcon(tech)}</span>
                        </IconButton>
                    </Tooltip>
                </div>
            ))}
            {techArray.length > 5 && !showMoreIcon && (
                <div className="d-flex items-center ">
                    <Tooltip title="see more">
                        <IconButton
                        className="p-0"
                        sx={{
                            backgroundColor: "transparent",
                            "&:hover": {
                            backgroundColor: "transparent",
                            },
                        }}
                        >
                        <span onClick={show}>
                            <GgMore />
                        </span>
                        </IconButton>
                    </Tooltip>
                </div>
            )}
        </div>
    );
}
